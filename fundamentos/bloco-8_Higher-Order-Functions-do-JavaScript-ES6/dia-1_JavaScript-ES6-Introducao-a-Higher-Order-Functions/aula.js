/* const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello); */

/* const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(1)
console.log(initialSum(2)); */

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(15, isEven); // Testa quais números serão pares;
repeat(15, isOdd); // Testa quais números serão ímpares;