
/**
 *  window.alert() ou alert()
 *  window.confirm()
 *  window.prompt()
 */
/**
let num1 = parseInt(prompt('Digite um número: '));
let num2 = parseInt(prompt('Digite outro número: '));
 */

let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

num1 = Number(num1);
num2 = Number(num2);
// let resultado =  num1 + num2; //posso eliminar nesse caso o resultado visto que o resultado não será utilizado em outros locais do código

alert(`O resultado da sua conta foi: ${ num1 + num2}`);