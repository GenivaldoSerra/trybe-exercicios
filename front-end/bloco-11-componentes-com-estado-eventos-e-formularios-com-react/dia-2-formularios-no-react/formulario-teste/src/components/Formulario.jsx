import React, { Component } from 'react';

class FormularioTest extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      digitar: '',
    };
  }

  handleChange(event) {
    this.setState({
      digitar: event.target.value,
    });
  }

  render() {
    return (
      <section>
        <form action="">
          <label>
            Nome:
            <input type="text" value={this.state.digitar} onChange={this.handleChange} name="Nome" id="nome" />
          </label>
          <label>
            E-mail:
            <input type="email" name="E-mail" id="email" />
          </label>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </section>
    );
  }

}
export default FormularioTest;