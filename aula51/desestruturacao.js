const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
};

//const nome = pessoa.nome;
// Atribuição via desestruturação
const { nome, idade, sobrenome } = pessoa;

console.log(nome, idade, sobrenome);

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);