"use client";

import { useState, useCallback } from "react";

import { Button } from "@/components/ui/button";

import { Upload, File, X, AlertTriangle } from "lucide-react";

interface FileDropZoneProps {
	onFilesSelected: (files: File[]) => void;
	acceptedFileTypes?: string[];
	acceptedExtensions?: string[];
	maxFiles?: number;
	className?: string;
}

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

export function FileDropZone({
	onFilesSelected,
	acceptedFileTypes = SAFE_MIME_TYPES,
	acceptedExtensions = SAFE_EXTENSIONS,
	maxFiles = 10,
	className = "",
}: FileDropZoneProps) {
	const [isDragOver, setIsDragOver] = useState(false);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [validationErrors, setValidationErrors] = useState<string[]>([]);

	const validateFile = useCallback(
		(file: File): { isValid: boolean; error?: string } => {
			if (file.size > 10 * 1024 * 1024) {
				return {
					isValid: false,
					error: `File too large: ${file.name} (max 10MB)`,
				};
			}

			const isValidMimeType =
				acceptedFileTypes.includes("*") ||
				acceptedFileTypes.some((type) => file.type.includes(type));

			if (!isValidMimeType) {
				return {
					isValid: false,
					error: `Invalid file type: ${file.name} (${file.type})`,
				};
			}

			const fileExtension = file.name
				.toLowerCase()
				.substring(file.name.lastIndexOf("."));
			const isValidExtension =
				acceptedExtensions.includes("*") ||
				acceptedExtensions.some((ext) => fileExtension === ext.toLowerCase());

			if (!isValidExtension) {
				return {
					isValid: false,
					error: `Invalid file extension: ${file.name}`,
				};
			}

			const dangerousExtensions = [
				".exe",
				".bat",
				".cmd",
				".com",
				".pif",
				".scr",
				".vbs",
				".js",
			];
			if (
				dangerousExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))
			) {
				return {
					isValid: false,
					error: `Dangerous file extension blocked: ${file.name}`,
				};
			}

			return { isValid: true };
		},
		[acceptedFileTypes, acceptedExtensions]
	);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			setIsDragOver(false);

			const files = Array.from(e.dataTransfer.files);
			const errors: string[] = [];
			const validFiles: File[] = [];

			files.slice(0, maxFiles).forEach((file) => {
				const validation = validateFile(file);
				if (validation.isValid) {
					validFiles.push(file);
				} else {
					errors.push(validation.error!);
				}
			});

			setValidationErrors(errors);
			setSelectedFiles((prev) => [...prev, ...validFiles]);
			onFilesSelected(validFiles);
		},
		[maxFiles, validateFile, onFilesSelected]
	);

	const handleFileSelect = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = Array.from(e.target.files || []);
			const errors: string[] = [];
			const validFiles: File[] = [];

			files.slice(0, maxFiles).forEach((file) => {
				const validation = validateFile(file);
				if (validation.isValid) {
					validFiles.push(file);
				} else {
					errors.push(validation.error!);
				}
			});

			setValidationErrors(errors);
			setSelectedFiles((prev) => [...prev, ...validFiles]);
			onFilesSelected(validFiles);
		},
		[maxFiles, validateFile, onFilesSelected]
	);

	const removeFile = useCallback((index: number) => {
		setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
	}, []);

	const clearErrors = useCallback(() => {
		setValidationErrors([]);
	}, []);

	return (
		<div className={`space-y-4 ${className}`}>
			<div
				className={`
          relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200
          ${
						isDragOver
							? "border-blue-500 bg-blue-50"
							: "border-gray-300 hover:border-gray-400"
					}
        `}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				<input
					type="file"
					multiple
					accept={acceptedExtensions.join(",")}
					onChange={handleFileSelect}
					className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
				/>

				<div className="flex flex-col items-center gap-3">
					<div
						className={`
            p-3 rounded-full transition-colors duration-200
            ${isDragOver ? "bg-blue-100" : "bg-gray-100"}
          `}
					>
						<Upload
							className={`w-6 h-6 ${
								isDragOver ? "text-blue-600" : "text-gray-600"
							}`}
						/>
					</div>

					<div className="space-y-2">
						<h3 className="text-lg font-semibold text-gray-900">
							Drag and drop files here or click to select
						</h3>
						<p className="text-sm text-gray-500">
							Allowed file types: Text, Markdown, JSON, XML, HTML, CSS,
							JavaScript, YAML
						</p>
						<p className="text-xs text-gray-400">
							Max {maxFiles} files, max 10MB
						</p>
					</div>
				</div>
			</div>

			{validationErrors.length > 0 && (
				<div className="space-y-2">
					<div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
						<AlertTriangle className="w-5 h-5 text-red-600" />
						<div className="flex-1">
							<h4 className="text-sm font-medium text-red-800">
								Validation errors:
							</h4>
							<ul className="text-xs text-red-700 mt-1 space-y-1">
								{validationErrors.map((error, index) => (
									<li key={index}>• {error}</li>
								))}
							</ul>
						</div>
						<Button
							variant="ghost"
							size="sm"
							onClick={clearErrors}
							className="text-red-600 hover:text-red-800"
						>
							<X className="w-4 h-4" />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
