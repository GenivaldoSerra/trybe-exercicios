import React from 'react';
import './App.css';

function handleBtn01() {
  console.log('Clicou no botão!');
}

const handleBtn02 = () => {
  console.log('Usou o segundo botão!!');
}

const handleBtn03 = () => {
  console.log('Usou o terceiro botão!!!')
}

class App extends React.Component {
  render() {
    return (
      <main>
        <button onClick={handleBtn01}>Meu botão</button>
        <button onClick={handleBtn02}>Botão 02</button>
        <button onClick={handleBtn03}>Botão 03</button>
      </main>
    )
  }
}

export default App;
