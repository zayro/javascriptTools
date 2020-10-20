const base = 3;
const exponente = 10;
console.log(base ** exponente); // 59049
console.log(Math.pow(base, exponente)); // 59049

/**
 * MATH.TRUNCH
 * Devuelve la parte entera del número indicado.
 */


console.log(Math.trunc(2.43)); // 2
console.log(Math.trunc(-3.92)); // -3
console.log(Math.trunc(10)); // 10

/**
 * MATH.CBRT
 * Devuelve la raíz cúbica de x.
 */


console.log(Math.cbrt(27)); // 3

/**
 * MATH.SIGN
 * Devuelve el signo del número indicado. Si es positivo devuelve 1, si es negativo -1 y 0 si es 0.
 */

console.log(Math.sign(1.33)); // 1
console.log(Math.sign(-9)); // -2
console.log(Math.sign(0)); // 0
