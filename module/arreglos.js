export class arreglos {
  array_numero_minimo() {
    const data = [10, 30, 5, 8];

    const find_min = (data) => {
      return Math.min.apply(Math, data);
    };

    console.log(find_min(data));
  }

  array_numero_minimo_(data = [10, 30, 5, 8]) {
    console.log(`🚀 ~ array_numero_minimo_`, data);
    const retorno = Math.min(...data);
    console.log(`🚀 ~ retorno`, retorno);
    return retorno;
  }

  array_numero_maximo() {
    const data = [10, 30, 5, 8];

    find_max = (data) => {
      return Math.max.apply(Math, data);
    };

    console.log(find_max(data));
  }

  array_ordenar_numeros_menor(numeros = [3, 23, 12]) {
    console.group("array_ordenar_numeros_menor");

    console.log(`🚀 ~ ordernar_numeros_menor ~ numeros`, numeros);

    const response = numeros.sort(function (a, b) {
      return a - b;
    }); // --> 3, 12, 23
    console.log(`🚀 ~ response ~ response`, response);
    console.groupEnd();
  }

  array_ordenar_numeros_mayor(numeros = [3, 23, 12]) {
    console.group("array_ordenar_numeros_mayor");
    console.log(`🚀 ~ ordernar_numeros_mayor ~ numeros`, numeros);
    const response = numeros.sort(function (a, b) {
      return b - a;
    }); // --> 23, 12, 3

    console.log(`🚀 ~ response`, response);
    console.groupEnd();
  }

  array_duplicados() {
    const arr = ["a", "d", "r", "a", "a", "f", "d", "a"];

    let resultaJson = arr.reduce(
      (json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }),
      {}
    );
    console.log(`🚀 ~ array_duplicados ~ resultaJson`, resultaJson);
  }
}
