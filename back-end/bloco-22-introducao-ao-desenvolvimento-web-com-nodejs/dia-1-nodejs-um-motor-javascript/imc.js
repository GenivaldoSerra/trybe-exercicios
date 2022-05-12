const readline = require('readline-sync');

const nome = readline.question("Qual seu nome? ")
const peso = readline.questionFloat("Qual seu peso? ");
const altura = readline.questionFloat("Qual sua altura? ");

const imc = (peso, altura) => {
  const calcIMC = (peso / (altura ** 2)).toFixed(2);

  if(calcIMC < 18.5) {
    return 'Abaixo do peso (magreza)'
  }
   else if(calcIMC < 25){
    return 'Peso normal'
  } else if(calcIMC < 30){
    return 'Acima do peso (sobrepeso)'
  } else if(calcIMC < 35){
    return 'Obesidade grau I'
  } else if(calcIMC < 40){
    return 'Obesidade grau II'
  }
   else {
    return 'Obesidade graus III e IV'
  }
}

const imcValue = imc(peso,altura);

console.log(`${nome} o resultado do seu imc é ${imcValue}`);
