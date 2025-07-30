"use client";

import * as React from "react";

import { FileDropZone } from "@/components/file-drop-zone";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { uploadFiles } from "@/components/server/file";

import { Upload, CheckCircle, AlertCircle, Shield, X } from "lucide-react";

import { toast } from "sonner";

interface FileWithSlug {
	file: File;
	slug: string;
}

interface FileUploadSectionProps {
	repositoryId: string;
	onUploadSuccess?: () => void;
}

export function FileUploadSection({
	repositoryId,
	onUploadSuccess,
}: FileUploadSectionProps) {
	const [selectedFiles, setSelectedFiles] = React.useState<FileWithSlug[]>([]);
	const [isUploading, setIsUploading] = React.useState(false);

	const handleFilesSelected = (files: File[]) => {
		const newFilesWithSlugs: FileWithSlug[] = files.map((file) => ({
			file,
			slug: file.name.replace(/\.[^/.]+$/, ""), // Entferne Dateiendung
		}));

		setSelectedFiles((prev) => [...prev, ...newFilesWithSlugs]);
	};

	const handleUpload = async () => {
		if (selectedFiles.length === 0) return;

		// Prüfe, ob alle Slugs ausgefüllt sind
		const emptySlugs = selectedFiles.filter((item) => !item.slug.trim());
		if (emptySlugs.length > 0) {
			toast.error("Please enter slugs for all files");
			return;
		}

		setIsUploading(true);

		try {
			// Erstelle separate Upload-Aufrufe für jede Datei mit ihrem eigenen Slug
			for (const fileWithSlug of selectedFiles) {
				await uploadFiles(
					[fileWithSlug.file],
					repositoryId,
					fileWithSlug.slug.trim()
				);
			}

			toast.success(`${selectedFiles.length} files successfully uploaded!`);
			setSelectedFiles([]);
			onUploadSuccess?.();
		} catch (error) {
			toast.error("Error uploading files. Please try again.");
		} finally {
			setIsUploading(false);
		}
	};

	const removeFile = (index: number) => {
		setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
	};

	const updateSlug = (index: number, newSlug: string) => {
		setSelectedFiles((prev) =>
			prev.map((item, i) => (i === index ? { ...item, slug: newSlug } : item))
		);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2 border border-blue-400 bg-blue-50 rounded-lg p-4">
					<p className="text-sm text-blue-800">
						<strong>Security Notice:</strong> Only safe text files will be
						accepted. Executable files and potentially dangerous formats will be
						automatically blocked.
					</p>
				</div>

				<FileDropZone
					onFilesSelected={handleFilesSelected}
					maxFiles={20}
					className="mb-4"
				/>

				{selectedFiles.length > 0 && (
					<div className="space-y-4">
						<div className="space-y-3">
							<h4 className="text-sm font-medium text-gray-700">
								Selected files:
							</h4>
							{selectedFiles.map((fileWithSlug, index) => (
								<div
									key={index}
									className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
								>
									<div className="flex-1">
										<p className="text-sm font-medium text-gray-900">
											{fileWithSlug.file.name}
										</p>
										<p className="text-xs text-gray-500">
											{(fileWithSlug.file.size / 1024).toFixed(1)} KB •{" "}
											{fileWithSlug.file.type}
										</p>
									</div>
									<div className="flex items-center gap-2">
										<div className="flex-1 min-w-0">
											<Input
												value={fileWithSlug.slug}
												onChange={(e) => updateSlug(index, e.target.value)}
												placeholder="Enter slug"
												className="w-full"
											/>
										</div>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => removeFile(index)}
											className="text-gray-400 hover:text-red-500"
										>
											<X className="w-4 h-4" />
										</Button>
									</div>
								</div>
							))}
						</div>

						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-zinc-700">
								{selectedFiles.length} safe files ready to upload
							</span>
							<Button
								onClick={handleUpload}
								disabled={isUploading}
								className="flex gap-2 bg-blue-600 hover:bg-blue-700 text-white"
							>
								{isUploading ? (
									<>
										<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
										Uploading...
									</>
								) : (
									<>
										<Upload className="w-4 h-4" />
										Upload all files
									</>
								)}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
