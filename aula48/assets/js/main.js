// const h1 = document.querySelector('.container h1');
// const data = new Date();


// function obterDiaSemanaExtenso(diaSemana){
//     switch (diaSemana) {
//         case 0:
//             return 'Domingo';
            
//         case 1:
//             return 'Segunda-feira';
            
//         case 2:
//             return 'Terça-feira';
            
//         case 3:
//             return 'Quarta-feira';
            
//         case 4:
//             return 'Quinta-feira';
            
//         case 5:
//             return 'Sexta-feira';
            
//         case 6:
//             return 'Sábado';
            
//         default:
//             return '';
//     }

// }

// function obterMesExtenso(numeroMes){
//     switch (numeroMes) {
//         case 0:
//             return 'Janeiro';
            
//         case 1:
//             return 'Fevereiro';
            
//         case 2:
//             return 'Março';
            
//         case 3:
//             return 'Abril';
            
//         case 4:
//             return 'Maio';
            
//         case 5:
//             return 'Junho';
            
//         case 6:
//             return 'Julho';

//         case 7:
//             return 'Agosto';

//         case 8:
//             return 'Setembro';

//         case 9:
//             return 'Outubro';
            
//         case 10:
//             return 'Novembro';

//         case 11:
//             return 'Dezembro';
            
//         default:
//             return '';
//     }

// }

// function zeroAEsquerda(numero){
//     return numero >= 10 ? numero : `0${numero}`;
// }
// function criaData(data){
//     const diaSemana = obterDiaSemanaExtenso(data.getDay());
//     const nomeMes = obterMesExtenso(data.getMonth());
    

//     const dataCompleta = `${diaSemana}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
//     return dataCompleta;
// }

// h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full',timeStyle: 'short'});

const h1 = document.querySelector('.container h1');
const data = new Date();


function obterDiaSemanaExtenso(diaSemana){
    const dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    return dias[diaSemana];
}

function obterMesExtenso(numeroMes){
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda(numero){
    return numero >= 10 ? numero : `0${numero}`;
}
function criaData(data){
    const diaSemana = obterDiaSemanaExtenso(data.getDay());
    const nomeMes = obterMesExtenso(data.getMonth());
    

    const dataCompleta = `${diaSemana}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
    return dataCompleta;
}

h1.innerHTML = criaData(data);