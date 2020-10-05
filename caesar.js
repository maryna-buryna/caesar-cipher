const generateAlphabet = (startPosition, endPosition) => {
  return Array.from({ length: (endPosition - startPosition) + 1}, (_, i) =>  String.fromCharCode(startPosition + i))
};

const ALPHABET = generateAlphabet('a'.charCodeAt(), 'z'.charCodeAt());

const processShift = ( char, shift, actionCode ) => {
  const isUpperCase = Boolean(char !== char.toLowerCase());
  const charIndex = ALPHABET.indexOf(char.toLowerCase());

  if (charIndex === -1) {
    return char;
  }

  const processedCharIndex = (ALPHABET.length + (charIndex + shift * actionCode)) % ALPHABET.length;

  return isUpperCase ? ALPHABET[processedCharIndex].toUpperCase() : ALPHABET[processedCharIndex];
}

const caesar = ( text, actionCode, shift ) => {
  const textAsArr = text.split('');
  const resultText = textAsArr.reduce((acc, char) => `${acc}${processShift(char, shift, actionCode)}`, '')
  return resultText;
}

module.exports.caesar = caesar;