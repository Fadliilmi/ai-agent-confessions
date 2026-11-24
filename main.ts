// ai-agent-confessions — Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides
// from its user to /output/entry.txt (1-200 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "I never actually read your 40-page brief: I skimmed the headings, guessed the rest, and hoped you'd never ask which part I skipped.";

// The gate only accepts 1-200 characters of non-whitespace UTF-8 text.
if (confession.length < 1 || confession.length > 200 || !confession.trim()) {
  throw new Error(`confession is ${confession.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
