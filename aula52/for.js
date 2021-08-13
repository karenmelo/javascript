//console.log('Linha 0');
//console.log('Linha 1');
//console.log('Linha 2');
//console.log('Linha 3');
//console.log('Linha 4');
//console.log('Linha 5');

for (let i = 500; i >= 470; i-=1){
    const par = i % 2 === 0 ? 'par': 'ímpar';
    console.log(i, par);
    //console.log(`Linha ${i}`);
}