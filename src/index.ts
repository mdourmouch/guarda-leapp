#!/usr/bin/env node
import * as commander from "commander";
import { exportConfiguration } from "./exportConfiguration";
import { leappLockPath } from "./config";
import { importConfiguration } from "./importConfiguration";

export interface ExportConfigurationOptions {
    outputFile: string,
    lockFile: string
}

export interface ImportConfigurationOptions {
    inputFile: string,
}

export const cli = commander.program
    .description("Watches your Leapp configuration intensely")
    .version("0.0.3");

cli.command('export')
    .description('Export your Leapp configuration')
    .option('-o, --output-file [filepath]', 'Output file path', './Leapp-lock-export.json')
    .option('-l, --lock-file [filepath]', 'Specify the path of Leapp-lock.json file to read', leappLockPath)
    .action(exportConfiguration);

cli.command('import')
    .description('Import your Leapp configuration')
    .requiredOption('-i, --input-file <filepath>', 'Input file path')
    .action(importConfiguration);

cli.parse(process.argv);
