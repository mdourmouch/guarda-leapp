import * as fs from 'fs';
import { decryptText } from "./crypto";
import { leappLockPath } from "./config";
import { Options } from '.';


export const exportConfiguration = (options: Options) => {
    console.log(`Exporting to ${options.file}`);
    const ciphertext = fs.readFileSync(leappLockPath, { encoding: 'utf-8' });
    const plaintext = decryptText(ciphertext);
    fs.writeFileSync(options.file, plaintext);
}