import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import api from "../../services/api";
import { login } from "../../services/auth";

import { Container } from './styles';

class SignUpForm extends Component{

  state = {
    error: "",
  };

  handleSubmit = async (values, actions) => {
    try{

      actions.setSubmitting(true)
      const { firstName, lastName, email, password } = values;
      const response = await api.post("/register", { firstName, lastName, email, password });
      login(response.data.token);
      const { history } = this.props;
      history.push('/dash');

    }catch(err){
      this.setState({ error: "Houve um problema ao processar seu Cadastro, tente Novamente!" });
    }
  };

  render() {
    return (
      <Container>
        <Formik
          initialValues={{ 
            firstName: '', 
            lastName: '', 
            email: '', 
            password: '', 
            passwordConfirmation: '' 
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
                .min(3, 'Necessário ter 3 caracteres ou mais!')
                .required('Requerido'),
            lastName: Yup.string()
                .min(3, 'Necessário ter 3 caracteres ou mais!')
                .required('Requerido'),
            email: Yup.string()
                .email('Endereço de email inválido')
                .required('Requerido'),
            password: Yup.string()
                .min(6, 'A Senha deve conter pelo menos 6 caracteres')
                .required('Requerido'),
            passwordConfirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais!')
                .required('Requerido'),
          })}
          onSubmit={this.handleSubmit}
        >
          <Form className="form">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <Field name="passwordConfirmation" type="password" />
            <ErrorMessage name="passwordConfirmation" />
            <button type="submit">Submit</button>
            {this.state.error && <p>{this.state.error}</p>}
          </Form>
        </Formik>
      </Container>
    );
  }
}

export default withRouter(SignUpForm);


