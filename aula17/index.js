/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924
 * Luiz Otávio nasceu em 1980.
 */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let imc = peso / (altura ^ 2);
let anoNascimento = new Date().getFullYear() - idade;
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmM} de altura e seu IMC é ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}`);