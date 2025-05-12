import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const modelDir = join(__dirname, "../prisma-models");
const outputPath = join(__dirname, "schema.prisma");

const baseSchema = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
`;

const modelFiles = readdirSync(modelDir).filter((file) =>
  file.endsWith(".prisma")
);

const models = modelFiles
  .map((file) => readFileSync(join(modelDir, file), "utf-8"))
  .join("\n\n");

writeFileSync(outputPath, baseSchema + "\n\n" + models);

console.log("✅ schema.prisma generated.");
