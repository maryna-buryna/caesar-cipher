
const fs = require(`fs`);
const CipherTransform = require('./CipherTransform');
const { parseArgv } = require('./utils/parseArgv');

const { input, output, shift, actionCode } = parseArgv();

const readStream = input ? fs.createReadStream(input) : process.stdin;
const writeStream = output ? fs.createWriteStream(output, {flags: 'a'}) : process.stdout
const cipherTransform = new CipherTransform(actionCode, shift);

readStream.pipe(cipherTransform).pipe(writeStream);
