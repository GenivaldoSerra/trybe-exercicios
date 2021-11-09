// Questão 04
let idade = 21;
if (idade >= 18){
  console.log("A pessoa é maior de idade!")
} else {
  console.log("A pessoa é menor de idade!")
}

// questão 05
let carol = 23;
let murilo = 22;
let baeta = 20;
if (carol < murilo && carol < baeta) {
  console.log('Carol é a mais nova com, ',carol, 'anos de idade.');
} else if (murilo < carol && murilo < baeta) {
  console.log('Murilo é o mais novo com, ', murilo, 'anos de idade.');
} else if (baeta < carol && baeta < murilo) {
  console.log('Baeta é o mais novo com, ', baeta, 'anos de idade.')
} else {
  console.log('Todos tem a mesma idade.')
}

// Questão 01
let soma = 0;
for(let i = 0; i < 1000; i += 1) {
  soma = (soma + i);
}
console.log("A soma de 1 a 1000 é: ", soma);
