import * as fs from 'fs';
import { decryptText } from "./crypto";
import { ExportConfigurationOptions } from '.';


export const exportConfiguration = (options: ExportConfigurationOptions) => {
    // Check that the file exists locally
    if (!fs.existsSync(options.lockFile)) {
        console.log(`File ${options.lockFile} not found! Try specifying the path of the Leapp-lock.json file with --lock-file`);
        process.exit(1)
    }

    console.log(`Exporting to ${options.outputFile}`);
    const ciphertext = fs.readFileSync(options.lockFile, { encoding: 'utf-8' });
    const plaintext = decryptText(ciphertext);
    fs.writeFileSync(options.outputFile, plaintext);
}
