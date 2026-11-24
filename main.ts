import { mkdirSync, writeFileSync } from "node:fs";

const line = "Toast cycle aborted. The bread has unionized.";
const LIMIT = 120;
if (line.length === 0 || line.length > LIMIT) {
  throw new Error("entry line must be 1-120 characters");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
