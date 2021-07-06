const numeros = [1,4,11,16,23,40,45,48,45,52,57,60];

const Pares = numeros.filter(el=>el%2==0);

const Impares = numeros.filter(el=>el%2!=0);

console.log(Pares);
console.log(Impares);