const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = expr.match(/..?/g);
  let char = "";
  let count = 0;
  let countWord = 0;
  for (let i = 0; i < arr.length; i++) {
    countWord = countWord + 1;
    if (arr[i] == 10) char = char + ".";
    if (arr[i] == 11) char = char + "-";
    if (arr[i] == "**") {
      count = count + 1;
      if (count == 5) {
        char = char + " ";
        count = 0;
      }
    }
    if (countWord == 5 && i != arr.length - 1) {
      char = char + "/";
      countWord = 0;
    }
  }

console.log(char)
  char = char.split("/")

console.log(char)

  let result = "";
  for (let i = 0; i < char.length; i++) {
    if (char[i] != " ") result = result + MORSE_TABLE[char[i]]
    if (char[i] == " ") result = result + " ";
  }


  return result;
}

module.exports = {
    decode
}
