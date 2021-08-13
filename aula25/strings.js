

let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.charAt(8));
console.log(umaString.concat('   ', 'em', ' ', 'um', ' ', ' lindo dia'));
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('roeu'));
console.log(umaString.lastIndexOf('roeu'));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/p/g));
console.log(umaString.replace(/r/g, '#'));

console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, umaString.length - 1));

console.log(umaString.split(' '));

console.log(umaString.split(' ', 3));

console.log(umaString.toLocaleLowerCase());
console.log(umaString.toLocaleUpperCase());