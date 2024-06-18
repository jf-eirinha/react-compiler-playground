import fs from "fs";
import * as BabelParser from "@babel/parser";
import * as BabelCore from "@babel/core";
import pluginObj from "./plugin";

const INPUT_FILE_PATH = "input.js";

function compile(
  input: string,
  plugin: BabelCore.PluginObj<any>
): BabelCore.BabelFileResult | null {
  const ast = BabelParser.parse(input, {
    sourceFilename: INPUT_FILE_PATH,
    plugins: ["typescript"],
    sourceType: "module",
  });

  const result = BabelCore.transformFromAstSync(ast, input, {
    filename: INPUT_FILE_PATH,
    plugins: [[plugin, {}]],
    sourceType: "module",
  });

  return result;
}

function main() {
  const input = fs.readFileSync(INPUT_FILE_PATH, "utf8");

  const result = compile(input, pluginObj);

  console.log(result?.code);
}

main();
