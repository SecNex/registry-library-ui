"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { deleteFile } from "@/components/server/file";

import { Trash2 } from "lucide-react";

import { toast } from "sonner";

export const FileCard = ({
	file,
}: {
	file: {
		id: string;
		slug: string;
		created_at: Date;
		updated_at: Date;
	};
}) => {
	const handleDelete = async () => {
		await deleteFile(file.id);
		toast.success("File deleted successfully");
	};

	return (
		<div
			key={file.id}
			className="flex flex-col gap-2 border p-4 rounded-lg hover:bg-zinc-50 transition-colors duration-300"
		>
			<div className="flex gap-2 justify-between items-center ">
				<div className="flex flex-col gap-2">
					<div>{file.slug}</div>
				</div>
				<div className="flex gap-2">
					<Button
						variant="destructive"
						size="icon"
						onClick={handleDelete}
					>
						<Trash2 className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	);
};
