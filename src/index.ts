import fs from "node:fs";
import path from "node:path";
import fsp from "node:fs/promises";

export async function updateVersion(dir: string, version: string) {
  const pkg = path.join(dir, "package.json");
  if (fs.existsSync(pkg)) {
    const content = await fsp.readFile(pkg, "utf-8");
    const updated = content.replace(/"version"\s*:\s*"([^"]*)"/g, (substr, $1) => substr.replace($1, version));
    await fsp.writeFile(pkg, updated, "utf-8");
    return true;
  }
  return false;
}
