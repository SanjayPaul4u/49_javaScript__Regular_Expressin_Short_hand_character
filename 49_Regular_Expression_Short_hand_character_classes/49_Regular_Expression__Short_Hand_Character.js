console.log("Short hand characters in regular expression.");

//SHORT HAND CHARACTER CLASSES
let regularExpression = /\w+anjay/;  // '\w' means word characters '_', 'alphabate' or 'numbers'
regularExpression = /\w+anjay/;  // '\w+' means one or more word characters '_', 'alphabate' or 'numbers'
regularExpression = /\Wpaul/;    // '\W' (here W is capital letter) means non character *$%&. 
regularExpression = /\W+/;       // '\W' (here W is capital letter) means non character *$%& etc. 
regularExpression = /\W+paul/;   // '\W+' means one and more non character *$%& etc. 
regularExpression = /\d999/;     // '\d' means any digit 
regularExpression = /\d+999/;    // '\d+' one or more digit
regularExpression = /\D999/;     // '\D' means NON digit
regularExpression = /\D+999/;    // '\D+' means one or more NON digit
regularExpression = /\s999/;     // '\s' means match white space character.
regularExpression = /\s+999/;    // '\s+' means one or more white space character NON digit
regularExpression = /\S999/;     // '\S' means match NON white space character.
regularExpression = /\S+999/;    // '\S+' means one or more NON white space character NON digit
regularExpression = /is\b/;    // '\b' means word boundary

//ASSERTION
regularExpression = /p(?=a)/;
regularExpression = /p(?!a)/;   

let string = "This ssadsfadfafdsanjay 46546464ss999 pvul";

let result = regularExpression.exec(string);
console.log(result);

if (regularExpression.test(string)) {
    console.log(`The string "${string}" MATCHES the expression "${regularExpression.source}"`);
}