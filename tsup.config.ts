import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  entry: ["src/main.ts"],
  format: ["cjs"],
  treeshake: true,
  bundle: true,
  clean: true,
  tsconfig: "tsconfig.build.json",
  dts: true,
  onSuccess: watch
    ? "node --enable-source-maps dist/main.js --inspect"
    : undefined,
}));
