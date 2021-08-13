//material de leitura/consulta developer.mozilla.org/pt-BR
//const tresHoras = 60 * 60 * 3 * 1000; //1000 pq no js hora é em milisegundos.
//const data = new Date(0 + tresHoras); //marco zero timestamp unix ou época unix

//em js os meses começam do 0 e vai até 11, ou seja 0 é Janeiro(1) e 11 é Dezembro(12)
//const data = new Date(2019,3);// formato a, m, d, h, m, s, ms
const data = new Date('2019-04-20 20:20:59');
console.log(data.toString())
console.log('Dia ', data.getDate())
console.log('Mês', data.getMonth()+1) //mês começa do 0
console.log('Ano', data.getFullYear())
console.log('Hora ', data.getHours())
console.log('Min ', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('Milisegundo', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 = domingo, 6 = sábado