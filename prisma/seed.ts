import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  console.log("Seeding database...");
  // seed routine here
  console.log("Seeding database finished.");
}

main();
