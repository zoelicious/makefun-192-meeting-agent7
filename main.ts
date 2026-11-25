import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptPath = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(scriptPath);

const entry = "One guy joined just to say 'I'm only here to listen' — then narrated his listening for the whole call.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, entry, "utf8");
} catch (err) {
  console.error("Failed to write entry from " + scriptDir + ": " + err);
  process.exit(1);
}
