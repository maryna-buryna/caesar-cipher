
const fs = require(`fs`);
const path = require(`path`);
const { caesar } = require(`./caesar`);
const { parseArgv } = require("./utils/parseArgv");

const attrData = parseArgv();

let writeStream; 

// create writeStream if output file is valid
if (attrData.output) {
  writeStream = fs.createWriteStream(attrData.output);
}

const getCipherResults = (inputText) => {
  const outputText = caesar(inputText, attrData.shift, attrData.actionCode);
  if ( writeStream ) {
    writeStream.write(outputText, 'utf-8');
  } else {
    process.stdout.write( outputText );
  }
};

if (attrData.input) {
  const inputText = fs.readFileSync(attrData.input, { encoding: `utf-8` });
  getCipherResults(inputText);
} else {
  process.stdin.on('data', (data) => getCipherResults(data.toString()));
}

process.on('exit', () => {
  if (writeStream) {
    writeStream.end();
  };
});
