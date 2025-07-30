import { prisma } from "@/lib/prisma";

import { RepositoryCard } from "@/components/repository-card";
import { CreateRepositoryForm } from "@/components/form/create-repository";

export default async function AdminRepositoryPage() {
	const repositories = await prisma.scripts.repository.findMany();

	return (
		<div className="flex flex-col gap-4 p-6 mx-auto max-w-2xl">
			<h1>Scripts Repositories</h1>
			<div className="flex flex-col gap-4">
				{repositories.map((repository) => (
					<RepositoryCard
						key={repository.id}
						repository={repository}
					/>
				))}
			</div>
			<CreateRepositoryForm />
		</div>
	);
}
