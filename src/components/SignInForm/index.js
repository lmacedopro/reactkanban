import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignInForm extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {

        const response = await api.post("/authenticate", { email, password });
        login(response.data.token);
        this.props.history.push("/dash");
      } catch (err) {
        this.setState({ error: "Houve um problema com o login, verifique suas credenciais!" });
      }
    }
  };

  render() {
    return (
      <Container>
          <div>
            <Form onSubmit={this.handleSignIn}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <div className="submit">
                    <button type="submit">Entrar</button>
                    <Link to="/forgot">Esqueci minha Senha</Link>
                </div>
            </Form>
          </div>
          <div className="signup">
              <p>Ainda não possui uma conta? Não perca tempo. </p>
            <Link to="/register">Crie sua conta grátis</Link>
          </div>
      </Container>
    );
  }
}

export default withRouter(SignInForm);