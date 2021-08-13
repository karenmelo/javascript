/**
let num1 = 9.49578;
let num2 = Math.floor(num1); //arredonda para baixo com a função floor da biblioteca Math
console.log(num2);

num2 = Math.ceil(num1); //arredonda para cima com a função ceil da biblioteca Math
console.log(num2);

num2 = Math.round(num1); //arredonda o valor pro mais próximo com a função round da biblioteca Math
console.log(num2);


console.log(Math.max(1,2,3,5,19,28,45,1500,-10,-25,-500)); // me da o maior número da sequencia
console.log(Math.min(1,2,3,5,19,28,45,1500,-10,-25,-500));// me da o menor número da sequencia

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // gera números aleatórios
console.log(aleatorio); 


console.log(Math.pow(2,10)); //potencialização 2^10 =1024
console.log(2**10); //potencialização 2^10 =1024


let raizQuadrada = 9;
console.log(raizQuadrada ** (1/2));
console.log(raizQuadrada ** 0.5); 
*/

console.log(100/0); //resultado Infinity e se avalia como true em outras linguagens não há divisão por 0