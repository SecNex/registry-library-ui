"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

const SAFE_MIME_TYPES = [
	"text/plain",
	"text/markdown",
	"text/csv",
	"text/conf",
	"text/config",
	"text/ini",
	"text/cfg",
	"text/sh",
	"text/bash",
	"text/zsh",
	"text/fish",
	"application/json",
	"application/xml",
	"text/xml",
	"text/html",
	"text/css",
	"text/javascript",
	"application/javascript",
	"text/yaml",
	"text/yml",
	"application/yaml",
	"application/yml",
];

const SAFE_EXTENSIONS = [
	".txt",
	".md",
	".csv",
	".json",
	".xml",
	".html",
	".htm",
	".css",
	".js",
	".yaml",
	".yml",
	".log",
	".ini",
	".cfg",
	".conf",
	".config",
	".sh",
	".bash",
	".zsh",
	".fish",
	".py",
	".js",
	".ts",
	".jsx",
	".tsx",
	".vue",
	".php",
	".rb",
	".go",
	".rs",
	".java",
	".c",
	".cpp",
	".h",
	".sql",
	".r",
	".m",
	".pl",
	".lua",
	".scala",
	".kt",
	".conf",
	".config",
	".ini",
	".cfg",
	".sh",
	".bash",
];

const DANGEROUS_EXTENSIONS = [
	".exe",
	".bat",
	".cmd",
	".com",
	".pif",
	".scr",
	".vbs",
	".js",
	".jar",
	".msi",
	".dmg",
	".pkg",
	".deb",
	".rpm",
];

function validateFile(file: { name: string; type: string; size: number }): {
	isValid: boolean;
	error?: string;
} {
	if (file.size > 10 * 1024 * 1024) {
		return { isValid: false, error: `File too large: ${file.name} (max 10MB)` };
	}

	const isValidMimeType = SAFE_MIME_TYPES.some((type) =>
		file.type.includes(type)
	);
	if (!isValidMimeType) {
		return {
			isValid: false,
			error: `Invalid file type: ${file.name} (${file.type})`,
		};
	}

	const fileExtension = file.name
		.toLowerCase()
		.substring(file.name.lastIndexOf("."));
	const isValidExtension = SAFE_EXTENSIONS.some(
		(ext) => fileExtension === ext.toLowerCase()
	);
	if (!isValidExtension) {
		return { isValid: false, error: `Invalid file extension: ${file.name}` };
	}

	if (
		DANGEROUS_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext))
	) {
		return {
			isValid: false,
			error: `Dangerous file extension blocked: ${file.name}`,
		};
	}

	return { isValid: true };
}

export async function uploadFiles(
	files: File[],
	repositoryId: string,
	slug: string
) {
	const repository = await prisma.scripts.repository.findUnique({
		where: { id: repositoryId },
	});

	if (!repository) {
		throw new Error("Repository not found");
	}

	const validationErrors: string[] = [];
	const validFiles: File[] = [];

	for (const file of files) {
		const validation = validateFile(file);
		if (validation.isValid) {
			validFiles.push(file);
		} else {
			validationErrors.push(validation.error!);
		}
	}

	if (validationErrors.length > 0) {
		throw new Error(`File validation errors:\n${validationErrors.join("\n")}`);
	}

	if (validFiles.length === 0) {
		throw new Error("No valid files found");
	}

	for (const file of validFiles) {
		const fileContent = await file.text();
		const base64Content = Buffer.from(fileContent).toString("base64");

		await prisma.scripts.file.create({
			data: {
				repository_id: repositoryId,
				file_extension: file.name.split(".").pop() ?? "",
				slug: slug,
				content: base64Content,
			},
		});
	}

	revalidatePath("/");

	return { success: true, uploadedFiles: validFiles.length };
}

export async function deleteFile(fileId: string) {
	await prisma.scripts.file.delete({
		where: { id: fileId },
	});

	revalidatePath("/");
}
