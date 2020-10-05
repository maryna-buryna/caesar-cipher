const { throwArgvError } = require('./throwArgvError');
const OPTION_NAME = 'action'
const DECODE = 'decode';
const ENCODE = 'encode';

const getActionCode = (argv) => {
  const action = argv.action || argv.a;
  if (!action ) {
    throwArgvError(OPTION_NAME, "arg has not been found");
  }
  if (action !== DECODE && action !== ENCODE) {
    throwArgvError(OPTION_NAME, `The value must be ${DECODE} or ${ENCODE}`);

    process.exit(-1);
  }

  return  action === ENCODE ? 1 : -1; 
}

module.exports.getActionCode = getActionCode;
