const denoConfig = JSON.parse(await Deno.readTextFile("./deno.json"));

console.log(denoConfig.version);
