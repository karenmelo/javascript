/**
 *   NaN => Not a Number
 *   IEEE 754-2008 - Padrão de precisão de casas decimais seguido pelo javascript
 */

let num1 = 0.7;
let num2 = 0.1;

num1 += num2;  //0.8
num1 += num2;  //0.9 
num1 += num2;  //1.0
num1 += num2;  //1.1
num1 += num2;  //1.2
num1 += num2;  //1.3
num1 += num2;  //1.4
num1 += num2;  //1.5

//num1 = parseFloat(num1.toFixed(2));
num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2)); //retorna a representação binária do valor
//console.log(num1.toFixed(2)); //arredonda o valor em 2 casas

//let temp = num1 + 'Olá';
//console.log(Number.isNaN(temp));