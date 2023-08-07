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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 10) char = char + ".";
    if (arr[i] == 11) char = char + "-";
    if (arr[i] == "**") {
      count = count + 1;
      if (count == 5) {
        char = char + " ";
        count = 0;
      }
    }
  }

  let tmp = "";
  let resultArr = []; 
  for (let i = 0; i < char.length; i ++) {
    if (char[i] !== " ") {
      tmp = tmp + char[i];
    }
    if (i == char.length - 1 && tmp != "") {
      resultArr.push(tmp);
      tmp = "";
    }
    if (char[i] === " " && tmp != "") {
      resultArr.push(tmp);
      resultArr.push(" ");
      tmp = "";
    }
  }

  let result = ""
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] != " ") result = result + MORSE_TABLE[resultArr[i]]
    if (resultArr[i] == " ") result = result + " ";
  }


  return result;
}

module.exports = {
    decode
}
