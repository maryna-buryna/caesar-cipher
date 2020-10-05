const { getCaesarShift } = require('./getCaesarShift');
const { getActionCode } = require('./getActionCode');
const { validatePath } = require('./validatePath');

const argv = require('optimist').argv;

const parseArgv = () => {
  return {
    actionCode: getActionCode(argv),
    shift: getCaesarShift(argv),
    input: validatePath(argv, 'input', argv.input),
    output: validatePath(argv, 'output', argv.input),
  }
}

module.exports.parseArgv = parseArgv;
