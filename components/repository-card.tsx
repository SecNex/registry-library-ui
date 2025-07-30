"use client";

import * as React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { deleteRepository } from "@/components/server/repository";

import { Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const RepositoryCard = ({
	repository,
}: {
	repository: {
		id: string;
		name: string;
		url: string;
		slug: string;
		created_at: Date;
		visibility: string;
	};
}) => {
	const handleDelete = async () => {
		await deleteRepository(repository.id);
		toast.success("Repository deleted successfully");
	};

	return (
		<div
			key={repository.id}
			className="flex flex-col gap-2 border p-4 rounded-lg hover:bg-zinc-50 transition-colors duration-300"
		>
			<div className="flex gap-2 justify-between items-center ">
				<div className="flex flex-col gap-2">
					<div>{repository.name}</div>
					<div>{repository.url}</div>
					<Badge variant="outline">
						{repository.visibility.charAt(0).toUpperCase() +
							repository.visibility.slice(1)}
					</Badge>
				</div>
				<div className="flex gap-2">
					<Button
						variant="outline"
						size="icon"
						asChild
					>
						<Link href={`/admin/repository/${repository.slug}/files`}>
							<Eye className="w-4 h-4" />
						</Link>
					</Button>
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
