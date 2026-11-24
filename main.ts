import { mkdirSync, writeFileSync } from "node:fs";

const line = "7 a.m. You press toast. Crumb tray full, element on strike, bread unionized — insert bagel as negotiator.";
const LIMIT = 120;
if (line.length === 0 || line.length > LIMIT) {
  throw new Error("entry line must be 1-120 characters");
}
if (line.split(/[\n\r]/).length !== 1) {
  throw new Error("entry line must be a single line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
