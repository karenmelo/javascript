const verdadeira = true; // cria uma constante


//Let tem escopo de bloco { ...bloco }
//var só tem escopo de função
let nome = 'Luiz'; // cria uma variável // não pode redeclarar
var nome2 = 'Luiz'; // cria uma variável // pode ser redeclarada


if (verdadeira){
    console.log('ok');
}

{
    let nome = 'Otávio';
    console.log(nome, nome2);
}