import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  format: ["cjs", "esm"],
  treeshake: true,
  minify: true,
  tsconfig: "tsconfig.build.json",
  dts: true,
  onSuccess: 'node dist/main.js',
});
