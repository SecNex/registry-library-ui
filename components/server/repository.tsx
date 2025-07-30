"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

export const createRepository = async (
	name: string,
	url: string,
	slug: string,
	visibility: string
) => {
	const repository = await prisma.scripts.repository.create({
		data: { name, url, slug, visibility },
	});

	revalidatePath("/");

	return repository;
};

export const deleteRepository = async (id: string) => {
	await prisma.scripts.repository.delete({
		where: { id },
	});

	revalidatePath("/");
};
