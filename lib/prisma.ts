import { PrismaClient as PrismaScripts } from "@/prisma/scripts/generated/prisma";
// import { PrismaClient as PrismaApp } from "@/prisma/app/generated/prisma";

const globalForPrisma = global as unknown as {
	prismaScripts: PrismaScripts;
	// prismaApp: PrismaApp;
};

export const prismaScripts =
	globalForPrisma.prismaScripts ?? new PrismaScripts();
// export const prismaApp = new PrismaApp();

if (process.env.NODE_ENV !== "production")
	globalForPrisma.prismaScripts = prismaScripts;

export const prisma = {
	scripts: prismaScripts,
	// app: prismaApp,
};
