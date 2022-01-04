const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const newArray = arrays.reduce((acumulador, item) => acumulador.concat(item), []);
console.log('newArray: ', newArray);