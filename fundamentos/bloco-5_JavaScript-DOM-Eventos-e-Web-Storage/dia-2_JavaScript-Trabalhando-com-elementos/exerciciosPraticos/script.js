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

// Questão - 04
let elementP = document.createElement('p');
      elementSectionCenter.appendChild(elementP);
      elementP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis iaculis nibh quis porta. Aliquam bibendum pharetra tincidunt. Integer at commodo purus, in facilisis eros. Maecenas suscipit magna ut quam auctor feugiat. Donec viverra ex nec mauris mollis fermentum. Vestibulum tempor feugiat libero, nec pulvinar sem suscipit cursus.'

// Questão - 05
let elementSectionLeft = document.createElement('section');
      elementSectionLeft.className = 'left-content';
      elementMain.appendChild(elementSectionLeft);

// Questão - 06
let elementSectionRight = document.createElement('section');
      elementSectionRight.className = 'right-content';
      elementMain.appendChild(elementSectionRight);

// Questão - 07
let elementImg = document.createElement('img');
      elementImg.className = 'small-image';
      elementSectionLeft.appendChild(elementImg);
      elementImg.src = 'https://picsum.photos/200'

// Questao - 08
