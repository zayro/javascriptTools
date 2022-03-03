/**
 * Libreria de Matematicas.
 * @class
 */
export class matematicas {
  /**
   * Get the x value.
   * @return {number} The x value.
   */
  exponente() {
    const base = 3;
    const exponente = 10;
    console.log(base ** exponente); // 59049
    console.log(Math.pow(base, exponente)); // 59049
  }

  sin_decimales() {
    /**
     * MATH.TRUNC
     * devuelve la parte entera de un numero removiendo cualquier dígito decimal
     */

    console.log(Math.trunc(2.43)); // 2
    console.log(Math.trunc(-3.92)); // -3
    console.log(Math.trunc(10)); // 10
  }

  raiz_cuadrada() {
    /**
     * MATH.CBRT
     * Devuelve la raíz cúbica de x.
     */

    console.log(Math.cbrt(27)); // 3
  }

  retorna_signo() {
    /**
     * MATH.SIGN
     * Devuelve el signo del número indicado. Si es positivo devuelve 1, si es negativo -1 y 0 si es 0.
     */

    console.log(Math.sign(1.33)); // 1
    console.log(Math.sign(-9)); // -2
    console.log(Math.sign(0)); // 0
  }

  sumatoria(numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]) {
    function suma(a, b) {
      return a + b;
    }

    //const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    const resultado = numeros.reduce(suma);

    return resultado;
  }
}
