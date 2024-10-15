#!/usr/bin/env node

import path from "node:path";
import minimist from "minimist";
import { updateVersion } from "./index";

const argv = minimist(process.argv.slice(2));

if (!argv.v) {
  throw new Error("You must specify a version with '-v'");
}

updateVersion(path.join(process.cwd(), argv._[0] ?? ""), argv.v)
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
