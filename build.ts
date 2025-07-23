import { build, $ } from "bun"

const prodDeps = ["node-cron", "pino", "pino-pretty", "pino-loki"]

const start = Date.now()

await build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "esm",
  minify: false,
  sourcemap: "linked",
  target: "node",
  external: prodDeps,
})

await $`cp -r ./drizzle ./dist/drizzle`

const pkgJson = await Bun.file("./package.json").json()

const prodPkgJson = {
  name: pkgJson.name,
  version: pkgJson.version,
  main: "index.js",
  type: "module",
  dependencies: prodDeps.reduce(
    (acc, dep) => {
      acc[dep] = pkgJson.dependencies[dep]
      return acc
    },
    {} as Record<string, string>,
  ),
}

await Bun.write("./dist/package.json", JSON.stringify(prodPkgJson, null, 2))

const end = Date.now()

console.log(`Build completed successfully in ${end - start}ms`)