"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { FileUploadSection } from "@/components/file-upload-section";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export const UploadFilesForm = ({
	repositoryId,
}: {
	repositoryId: string | null;
}) => {
	const [open, setOpen] = React.useState(false);

	const handleUploadSuccess = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button variant="outline">Upload Files</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Upload Files</DialogTitle>
					<DialogDescription>Upload files to the repository.</DialogDescription>
				</DialogHeader>
				<FileUploadSection
					repositoryId={repositoryId ?? ""}
					onUploadSuccess={handleUploadSuccess}
				/>
			</DialogContent>
		</Dialog>
	);
};
