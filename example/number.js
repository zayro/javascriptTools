console.log("TCL: Number('123')", Number('123'))

console.log("TCL: Number('12.3')", Number('12.3'))

console.log("TCL: Number('123e-1')", Number('123e-1'))

console.log("TCL: Number('')", Number(''))

console.log("TCL: Number('0x11') ", Number('0x11'))

console.log("TCL: Number('0b11')", Number('0b11'))

console.log("TCL: Number('0o11')", Number('0o11'))

console.log("TCL: Number('foo')", Number('foo'))

console.log("TCL: Number('100a')", Number('100a'))

console.log('TCL: Number.isInteger(10)', Number.isInteger(10))
console.log('TCL: Number.isInteger(10.5)', Number.isInteger(10.5))

/**
 * NUMBER.ISFINITE
 * Comprueba que el valor pasado sea finito.
 */
console.log('TCL: Number.isInteger(10)', Number.isFinite(10))
console.log('TCL: Number.isInteger(10.5)', Number.isFinite(10.5))

/**
 * NUMBER.ISNAN
 * Comprueba que el valor pasado es NaN (Not a number).
 */

Number.isNaN(123)
console.log('🚀 ~ Number.isNaN(123)', Number.isNaN(123))

console.log(Number.isNaN(123)) // false
console.log(Number.isNaN('string')) // false
console.log(Number.isNaN(NaN)) // true
