// Questão 01
let n = 5;
let aster = "*";
let espaco = "";
for(let i = 0; i < n; i += 1) {
  espaco = espaco + aster;
  for(let i = 0; i < n; i += 1) {
    console.log(espaco);
  }
}

