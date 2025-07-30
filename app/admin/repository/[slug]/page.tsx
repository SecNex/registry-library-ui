import { prisma } from "@/lib/prisma";

export default async function RepositoryPage({
	params,
}: {
	params: { slug: string };
}) {
	const repository = await prisma.scripts.repository.findUnique({
		where: { slug: params.slug },
	});

	console.log(repository);

	return <div>{repository?.name}</div>;
}
