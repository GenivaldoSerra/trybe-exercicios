const acorda = () => {
  return ('Acordando!!');
}

const cafe = () => {
  return ('Bora tomar café!!');
}

const dormir = () => {
  return ('Partiu dormir!!');
}

const doingThings = (callback) => {
  console.log(callback());
}

doingThings(acorda);
doingThings(cafe);
doingThings(dormir);
