const cryptoJS = require('crypto-js');
import * as nodeMachineId from 'node-machine-id';

export const encryptText = (text: string): string => {
  return cryptoJS.AES.encrypt(text.trim(), nodeMachineId.machineIdSync()).toString();
};

export const decryptText = (text: string): string => {
  return cryptoJS.AES.decrypt(text.trim(), nodeMachineId.machineIdSync()).toString(
    cryptoJS.enc.Utf8
  );
};
