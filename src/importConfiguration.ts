import * as fs from 'fs';
import { encryptText } from "./crypto";
import { leappLockPath } from "./config";
import { ImportConfigurationOptions } from '.';


export const importConfiguration = (options: ImportConfigurationOptions) => {
    console.log(`Importing from ${options.inputFile}`);
    const toImport = fs.readFileSync(options.inputFile, { encoding: 'utf-8' });
    const leappLock = encryptText(toImport);
    fs.writeFileSync(leappLockPath, leappLock);
}
