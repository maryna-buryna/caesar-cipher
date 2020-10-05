const fs = require('fs');
const path = require('path');

const { throwArgvError } = require('./throwArgvError');

const validatePath = (argv, argvName) => {
  if (typeof argv[argvName] === 'undefined') {
    return undefined;
  };

  const pathToFile = path.resolve(argv[argvName]);

  try {
    if (fs.existsSync(pathToFile)) {
      return pathToFile;
    }
  } catch(err) {
    throwArgvError(argvName, `We have an issue to find the provided path for ${argvName}`)
  }
  throwArgvError(argvName, `Path for ${argvName} does not exist`)
}

module.exports.validatePath = validatePath;