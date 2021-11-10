/* Exercícios sobre Objetos */

// Segunda Questão //
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
console.log("A jogadora",name +" "+ lastName, "tem", age, "anos de idade." );

//Terceira questão
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log("A jogadora",name +" "+ lastName, "tem", age, "anos de idade." );

//Quarta questão
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log("A jogadora",name +" "+ lastName, "foi eleita a melhor do mundo por", bestInTheWorld.length, "vezes");

//Quinta Questão
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log("A jogadora possui", medals["golden"] + " medalhas de ouro e "+ medals["silver"], "medalhas de prata.");

/* Exercícios sobre For/In */

// Primeira Questão
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for(let indice in names) {
  console.log('Olá ', names[indice]);
}

// Segunda questão
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let key in car) {
  console.log(key, car[key]);
}