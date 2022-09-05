import * as fs from 'fs';
import { encryptText } from "./crypto";
import { leappLockPath } from "./config";
import { Options } from '.';


export const importConfiguration = (options: Options) => {
    console.log(`Importing from ${options.file}`);
    const toImport = fs.readFileSync(options.file, { encoding: 'utf-8' });
    const leappLock = encryptText(toImport);
    fs.writeFileSync(leappLockPath, leappLock);
}
