import React, { Component } from 'react';

class FormularioTest extends Component {
  constructor() {
    super();


    this.state ={

    }
  }

  render() {
    return (
      <div>
        <h1>Testando Formulários em React!</h1>
        <form className="form">
          <label htmlFor="">
            Diga qualquer coisa:
            <textarea name="txtform" id="" cols="30" rows="10"></textarea>
          </label>
          <input type="text" name="nome" id="iptnome"/>
          <input type="email" name="E-mail" id="iptemail" />
        </form>
      </div>
    );
  }
}

export default FormularioTest;