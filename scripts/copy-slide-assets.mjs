import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve("slides/assets");
const destination = resolve("dist/assets");

await mkdir(destination, { recursive: true });

await cp(source, destination, {
  recursive: true,
  force: true,
});

console.log("[MarpUp] Copie des assets terminée.");
console.log(`  ${source}`);
console.log(`  → ${destination}`);
