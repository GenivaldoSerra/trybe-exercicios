// Questão - 01
let elementH1 = document.createElement('h1');
      elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
      document.body.appendChild(elementH1);

// Questão - 02
let elementMain = document.createElement('main');
      elementMain.className = 'main-content';
      document.body.appendChild(elementMain);

// Questão - 03
let elementSectionCenter = document.createElement('section');
      elementSectionCenter.className = 'center-content';
      elementMain.appendChild(elementSectionCenter);
      
