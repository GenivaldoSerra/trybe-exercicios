/* Questão 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let indice of numbers) {
  console.log(indice);
}

/* Questão 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
for (let indice of numbers) {
  som += indice;
}
console.log(som);

// Questão 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
for (let indice of numbers) {
  som += indice;
}
som = (som / 10);
console.log(som);

// Questão 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
for (let indice of numbers) {
  som += indice;
}
som = (som / 10);
if (som > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
}

// Questão 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
for(let indice = 0; indice < numbers.length; indice += 1) {
  if (numbers[indice] > maiorValor) {
    maiorValor = numbers[indice];
  }
}
console.log(maiorValor);

//  Questão 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado".
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0;
for(let indice = 0; indice < numbers.length; indice += 1) {
  if (numbers[indice] % 2 !== 0) {
    num += 1;
  }
}
if (num === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(num);
}

// Questão 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 500;
for(let indice = 0; indice < numbers.length; indice += 1) {
  if (numbers[indice] < menorValor) {
    menorValor = numbers[indice];
  }
}
console.log(menorValor);

/* Questão 08 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */
let numeros = [];
for(i = 0; i > numeros[25]; i += 1) {
  numeros.push[i];
  console.log(numeros);
}