#!/usr/bin/env node
import * as commander from "commander";
import { exportConfiguration } from "./exportConfiguration";
import { importConfiguration } from "./importConfiguration";

export interface Options {
  file: string
}

export const cli = commander.program
  .description("Watches your Leapp configuration intensely")
  .version("0.0.2");

cli.command('export')
  .description('Export your Leapp configuration')
  .option('-f, --file [filepath]', 'Output file path', './Leapp-lock-export.json')
  .action(exportConfiguration);

cli.command('import')
  .description('Import your Leapp configuration')
  .requiredOption('-f, --file <filepath>', 'Input file path')
  .action(importConfiguration);

cli.parse(process.argv);
