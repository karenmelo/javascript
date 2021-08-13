//Atribuição via desestruturação
//               0  1  2  3  4  5  6  7  8 - indice
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const primeiroNumero = numeros[0];
const [primeiroNumero, segundoNumero, ... resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);