const { Transform } = require('stream');
const { caesar } = require('./utils/caesar');

class CipherTransform extends Transform {
  constructor(actionCode, shift) {
    super()
    this.shift = shift
    this.actionCode = actionCode
  }

  _transform(text, _encoding, callback) {
    const outputText = caesar(`${text.toString('utf8')}`, this.shift, this.actionCode);
    callback(null, outputText)
  }
}

module.exports = CipherTransform;
