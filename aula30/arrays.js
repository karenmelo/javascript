const alunos = ['Luiz', 'Maria', 'João'];


alunos.push('Fábio');
alunos.push('Otávio');

console.log(alunos);
console.log(alunos.slice(-3));


//delete alunos[1] // exclui o valor que está no indice 1, mas não o indice em si que irá retornar o valor 'undefined'
//alunos.shift(); //remove o primeito item do array
//const removido = alunos.shift(); //remove o primeiro item do array e salva numa variável

//alunos.pop(); //remove o último item do array
//const removido = alunos.pop(); //remove o último item do array e salva numa variável

//alunos.unshift('Luiza'); // forma de adiciona um item no início do array
//alunos.unshift('Fábio');
//alunos.unshift('Otávio');



//alunos[alunos.length] = 'Eduardo'; //forma de incluir um item novo no final do array utilizando o tamanho do array
//alunos[alunos.length] = 'Luiza';
//alunos.push('Luiza'); // função para incluir um intem no final do array
//alunos.push('Fábio');
//alunos.push('Otávio');

//alunos[0] = 'Eduardo'; // altera um item do array
//alunos[3] = 'Luiza';

//console.log(alunos);
//console.log(alunos[0]);
//console.log(alunos[2]);