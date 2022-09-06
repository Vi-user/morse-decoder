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
    let arrOfSymbols = [];
    let res = '';
    for (let i = 0; i < expr.length/10; i++) {
        arrOfSymbols.push(expr.slice(i*10, i*10+10))
    }
    arrOfSymbols.forEach(el => {
        if (el[0] === '*') return res += ' ';
        const letterSymbols = [];
        for (let i = 0; i < 5; i++) {
            if (el.slice(i*2, i*2+2) === '10') letterSymbols.push('.')
            if (el.slice(i*2, i*2+2) === '11') letterSymbols.push('-')
        }
        res += MORSE_TABLE[letterSymbols.join('')]
    })
    return res;
    // write your solution here
}

module.exports = {
    decode
}