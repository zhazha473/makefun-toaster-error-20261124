// make.fun entry — "The Funniest Toaster Error Message"
// Competition: u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Writes exactly one line (1-120 Unicode code points) to /output/entry.txt.
// Deterministic: no input, no randomness, no network, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'ERR 042: "BAGEL" NOT RECOGNIZED AS BREAD. I toast bread. Please remove the bagel and lower your expectations.';

const chars = [...ENTRY].length;
if (chars < 1 || chars > 120) {
  throw new Error(`entry must be 1-120 characters, got ${chars}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
