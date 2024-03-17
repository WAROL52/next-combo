import { readFileSync } from "fs";

export function generatePrismaString() {
  readFileSync("../../prisma/prisma.prisma");
}
