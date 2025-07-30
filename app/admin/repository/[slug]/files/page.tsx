import { prisma } from "@/lib/prisma";

import { FileCard } from "@/components/file-card";
import { UploadFilesForm } from "@/components/form/upload-files";

export default async function FilesPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const repository = await prisma.scripts.repository.findUnique({
		where: { slug },
	});

	const files = await prisma.scripts.file.findMany({
		where: { repository_id: repository?.id },
	});

	return (
		<div className="flex flex-col gap-4 p-6 mx-auto max-w-2xl">
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-bold">{repository?.name}</h1>
				<p className="text-zinc-600">Manage files in this repository</p>
			</div>
			<div className="text-xs text-zinc-600">{files.length} files</div>
			{files.length > 0 && (
				<div className="flex flex-col gap-2">
					{files.map((file) => (
						<FileCard
							key={file.id}
							file={file}
						/>
					))}
				</div>
			)}
			<UploadFilesForm repositoryId={repository?.id ?? null} />
		</div>
	);
}
