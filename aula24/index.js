// substituires os valores iniciais pelos valores comentados ao lado das variáveis

let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A
let aux = varA;

//outra forma de resolver seria assim
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);

/**
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);
 */
