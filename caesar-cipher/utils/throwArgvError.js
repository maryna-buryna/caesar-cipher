const throwArgvError = (argvName, message) => {
  process.stderr.write(`ERROR: ${argvName}. ${message}`);
  process.exit(1);
}

module.exports.throwArgvError = throwArgvError;