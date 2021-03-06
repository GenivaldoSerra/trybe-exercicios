import React, { Component } from 'react';

class FormularioTest extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: '',
      inputEmail: '',
      inputArea: '',
      testeOk: false,
    };
  }

  handleChange = ({ target }) => {
    console.log(target);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: target.value,
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
              onChange={this.handleChange} 
              name="inputName" 
              id="nome" 
            />
          </label>
          <label>
            E-mail:
            <input 
              type="email"
              value={this.state.inputEmail}
              onChange={this.handleChange}
              name="inputEmail" 
              id="email" 
            />
          </label>
          <div>
            <textarea 

              name="inputArea" 
              id="" 
              cols="30" 
              rows="10"
              value={this.state.inputArea}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input 
              type="checkbox" 
              name="testeOk" 
              id="chkTeste" 
              value={this.state.testeOk}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </section>
    );
  }

}
export default FormularioTest;