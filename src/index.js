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
        let morseSymbol = '';
        let decodedMessage = '';
    
        let morseCharacters = [];
        for (let i = 0; i < expr.length; i += 10) {
            morseCharacters.push(expr.slice(i, i + 10));
        }
    
  
        for (let character of morseCharacters) {
            if (character === '**********') {
                decodedMessage += ' '; 
            } else {
                let morseCode = '';
    

                for (let i = 0; i < character.length; i += 2) {
                    let pair = character.slice(i, i + 2);
                    if (pair === '10') {
                        morseCode += '.';
                    } else if (pair === '11') {
                        morseCode += '-';
                    }
                }
    

                decodedMessage += MORSE_TABLE[morseCode] || '';
            }
        }
    
        return decodedMessage;

    }
    
    
    
   module.exports = {
    decode
    
}