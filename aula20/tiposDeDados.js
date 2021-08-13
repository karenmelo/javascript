const nome = 'Luiz';  // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string

const num1 = 10;    // number
const num2 = 10.52; // number
let nomeAluno;      // undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null; //Nulo = não aponta para local nenhum na memória
const aprovado = true; // variável booleana só tem 2 opções: true ou false

console.log(typeof num2, num2);

const a = [1,2]; //tipo por referência
const b = a;     //tipo por referência
console.log(a,b);

b.push(3);
console.log(a,b);