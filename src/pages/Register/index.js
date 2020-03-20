import React from 'react';
//import { Link, withRouter } from "react-router-dom";
//import { Formik, Field, Form, ErrorMessage } from 'formik';
//import * as Yup from 'yup';

//import api from "../../services/api";
//import { login } from "../../services/auth";

import { Container } from  './styles';

import imgblue from '../../assets/kanban_miniblue.png';

import SignUpForm from '../../components/SignUpForm';

export default function Register(){

  return (
    <Container>
        <header>
            <img src={imgblue} alt="" />
            <h1>React-Kanban</h1>
        </header>
        <h4>Estamos anciosos para ter você conosco! É só preencher o Formulário.</h4>
        <SignUpForm />
    </Container>    
  );
};