isNaN(true) //devuelve true
console.log("TCL: isNaN(NaN) ", isNaN(true) )
isNaN('string') //devuelve true
console.log("TCL: isNaN('string') ", isNaN('string') )
isNaN('12') //devuelve false
console.log("TCL: isNaN('12') ", isNaN('12') )
isNaN(12) //devuelve false
console.log("TCL: isNaN(12)", isNaN(12))

//El método .trimStart() limpia los espacios que haya al principio de una cadena de texto.
console.log('"                 Hola, qué tal?".trimStart()',"                 Hola, qué tal?".trimStart());

//El método .trimEnd() limpia los espacios que haya al final de una cadena de texto.
console.log('"Hola, qué tal?                 .trimEnd()"', "Hola, qué tal?                 ".trimEnd())

// Test function


function test() { 
    console.log('test');
    return true;
}

test.toString()
console.log(`TCL: : --------------------------------------`)
console.log(`TCL: : test.toString()`, test.toString())
console.log(`TCL: : --------------------------------------`)



// padStart nos permite rellenar una cadena de texto desde el inicio de ésta (primer carácter) hasta la longitud que hayamos indicado con los carácteres que queramos

console.log("string".padStart(10));
console.log("string".padStart(10, 'abd'));

// padEnd funciona igual que el anterior, pero en vez de rellenarlos por el principio de la cadena, lo rellena por el final de la cadena (último carácter).
console.log("string".padEnd(10));
console.log("string".padEnd(10, "abc"))


/**
 * SYMBOL
 */

 const symbol1 = Symbol();
 console.log(typeof symbol1); // symbol
