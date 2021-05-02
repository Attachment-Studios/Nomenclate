
// speech
let msg = new SpeechSynthesisUtterance();

// characters
vowels = 'a e i o u'.split(' ');
others = 'b c d f g h j k l m n p q r s t v w x y z ch sh ff ll lf gh'.split(' ');
startv = 'a i u'.split(' ');
startc = 'b c d f g h k l m n p r s t v w'.split(' ');

// process
function formword(l) {
	word = ""; // formed word

	var i; // iterator integer

	cvm = Math.floor( Math.random() * 3 ) - 2; // consonant-vowel manager
	if ( cvm == 0 || cvm < -1 || cvm > 1 ) {
		if ( Math.floor( Math.random() * 2 ) - 1 == 1 ) {
			cvm = 1;
		} else {
			cvm = -1;
		}
	}

	for ( i = 0; i < l; i++ ) {
		cvm = cvm * -1; // changes relation of character vowel-consonant

		char = ""; // added character

		if ( i == 0 ) {
			if ( cvm == -1 ) {
				char = startv[ Math.floor( Math.random() * startv.length ) ]; // starts letter with vowels only
			} else {
				char = startc[ Math.floor( Math.random() * startc.length ) ]; // starts letter with consonants only
			}
		} else {
			if ( cvm == -1 ) {
				char = vowels[ Math.floor( Math.random() * vowels.length ) ]; // letter will be vowels only
			} else {
				char = others[ Math.floor( Math.random() * others.length ) ]; // letter will be consonants only
			}
		}
		word = word + char; // concatenates character with word
	}

	return word;
}
