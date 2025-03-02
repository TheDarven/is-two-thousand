import { build, emptyDir } from "@deno/dnt";

const RED_COLOR = "\x1b[31m";
const RESET_COLOR = "\x1b[0m";

const version = Deno.args[0];
if (!isValidVersion(version)) {
  console.error(`${RED_COLOR}🚨 Invalid version number: ${RESET_COLOR}${version} should be in the format x.x.x`);

  Deno.exit(1);
}

await emptyDir("./npm");

await build({
  entryPoints: ["./src/main.ts"],
  outDir: "./npm",

  test: false,

  shims: {
    deno: true,
  },
  package: {
    name: "is-two-thousand",
    version: Deno.args[0],
    description: "Check if a number is 2000",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/TheDarven/is-two-thousand.git",
    },
    bugs: {
      url: "https://github.com/TheDarven/is-two-thousand/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});

function isValidVersion(version?: string): boolean {
  return version !== undefined && /^\d+\.\d+\.\d+$/.test(version);
}