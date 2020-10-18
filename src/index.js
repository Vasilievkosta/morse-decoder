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
    let result = '';
	let summary = '';	
	for (let i = 0; i < expr.length; i++) {
		if(i % 10 === 0 && i !== 0){
			result += ',';
		}
		result += expr[i];		
	}		
		result = result.split(',');		
		for (let i = 0; i < result.length; i++){
			if (result[i] === '**********'){
				summary += ' ';
			} else {
			summary += oneLetter(result[i]);
			}
		}		
		return summary;
	}	
// function finde letter of 10 number
	function oneLetter(expr) {
	let codeLetter = '';
	let codeMorse = '';
	let index;
	let letter = '';	
	for (let i = expr.length - 1; i >= 0; i--) {		
		if (expr[i] === '0' && expr[i-1] === '0' && expr[i+1] === '1'){
			index = (i+1);					
		}			
	}
	codeLetter = expr.slice(-(expr.length-index));
	for (let i = 0; i < codeLetter.length; i++) {
		if(i % 2 === 0 && i !== 0){
			codeMorse += ',';
		}
		codeMorse += codeLetter[i];		
	}	
	codeMorse = codeMorse.split(',');
	for(let i = 0; i < codeMorse.length; i++){
		if(codeMorse[i] === '10') {
			codeMorse[i] = '.';
		} else {
			codeMorse[i] = '-';
		}
	}
	codeMorse = codeMorse.join('');	
	for(let key in MORSE_TABLE) {
		if(codeMorse === key) letter = MORSE_TABLE[key];
	}	
	return letter;
}

module.exports = {
    decode
}