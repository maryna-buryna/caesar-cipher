
const { throwArgvError } = require('./throwArgvError');
const ALPHABET_LENGHT = 26;
const OPTION_NAME = 'shift'

const getCaesarShift = (argv) => {
  const shift = argv.shift || argv.s;

  if (typeof shift === 'undefined' || shift < 0 ) {
    throwArgvError(OPTION_NAME, "arg has not been found");
  }

  if ( shift < 0  || !Number.isInteger(shift)) {
    throwArgvError(OPTION_NAME, "Validation is failed. The value must be a positive integer.");
  }

  return shift % ALPHABET_LENGHT;
}

module.exports.getCaesarShift = getCaesarShift;