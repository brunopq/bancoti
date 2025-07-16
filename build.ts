import { build, $ } from "bun"

const start = Date.now()

await build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "esm",
  minify: true,
  sourcemap: "linked",
  target: "node",
})

await $`cp -r ./drizzle ./dist/drizzle`

const end = Date.now()

console.log(`Build completed successfully in ${end - start}ms`)