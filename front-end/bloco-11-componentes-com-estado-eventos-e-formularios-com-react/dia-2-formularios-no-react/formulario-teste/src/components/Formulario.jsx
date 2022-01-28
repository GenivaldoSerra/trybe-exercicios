import React, { Component } from 'react';

class FormularioTest extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: '',
      inputEmail: '',
      inputArea: '',
    };
  }

  handleChangeNome = ({ target }) => {
    this.setState({
      inputName: target.value,
    });
  };

  handleChangeEmail = ({ target }) => {
    this.setState({
      inputEmail: target.value,
    });
  };

  handleChangeArea = ({ target }) => {
    this.setState({
      inputArea: target.value,
    });
  };

  render() {
    return (
      <section>
        <form action="">
          <label htmlFor="nome">
            Nome:
            <input 
              type="text" 
              value={this.state.inputName} 
              onChange={this.handleChangeNome} 
              name="Nome" 
              id="nome" 
            />
          </label>
          <label>
            E-mail:
            <input 
              type="email"
              value={this.state.inputEmail}
              onChange={this.handleChangeEmail}
              name="E-mail" 
              id="email" 
            />
          </label>
          <div>
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="10"
              value={this.state.inputArea}
              onChange={this.handleChangeArea}
            />
          </div>
          <div>
            <button type="submit">Enviar Formulário</button>
          </div>
        </form>
      </section>
    );
  }

}
export default FormularioTest;