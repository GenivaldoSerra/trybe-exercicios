import React from 'react';
import './App.css';
class App extends React.Component {
  
  constructor() {
    super();
    this.handleBtn01 = this.handleBtn01.bind(this);
    this.handleBtn02 = this.handleBtn02.bind(this);
    this.handleBtn03 = this.handleBtn03.bind(this);
  }

  handleBtn01() {
    console.log('Clicou no botão!');
  }
  
  handleBtn02() {
    console.log('Usou o segundo botão!!');
  }
  
  handleBtn03() {
    console.log('Usou o terceiro botão!!!')
  }
  render() {
    return (
      <main>
        <button onClick={this.handleBtn01}>Meu botão</button>
        <button onClick={this.handleBtn02}>Botão 02</button>
        <button onClick={this.handleBtn03}>Botão 03</button>
      </main>
    )
  }
}

export default App;
