import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	const { slug } = await params;

	const file = await prisma.scripts.file.findUnique({
		where: { slug },
		include: {
			repository: true,
		},
	});

	console.log(file);

	if (!file) {
		return new Response("File not found", { status: 404 });
	}

	if (file.repository.visibility !== "public") {
		return new Response("File not found", { status: 404 });
	}

	const fileBuffer = Buffer.from(file.content, "base64");

	const fileName = `${file.slug}.${file.file_extension}`;

	return new Response(fileBuffer, {
		headers: {
			"Content-Type": "text/plain",
			"Content-Disposition": `attachment; filename="${fileName}"`,
			"Content-Length": fileBuffer.length.toString(),
		},
	});
}
