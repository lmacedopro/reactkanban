import React from "react";
import { MdList, MdPanTool, MdGroup } from 'react-icons/md';

import { Container } from './styles';

import headerimg from '../../assets/kanban.png';

import SignInForm from '../../components/SignInForm';

export default function Main() {
  
  return (
    <Container>
      <header><img src={headerimg} alt="" /></header>
      <content>
        <h1>Bem-vindo ao React-Kanban</h1>
        <h4>Organize suas tarefas e gerencie melhor seu tempo.</h4>
        <SignInForm />
        <ul>
          <li>
            <MdList className="icon" size={60} color="#FFF" />
            <h5>Organize</h5>
            <p>Crie e Gerencie seu fluxo de tarefas de maneira descomplicada, 
              com um método simples e fácil de entender.</p>
          </li>
          <li>
            <MdPanTool className="icon" size={60} color="#FFF" />
            <h5>Arraste e Solte</h5>
            <p>Seus Cards para alterar sua ordem e seu fluxo dentro de seus quadros de tarefas.</p>
          </li>
          <li>
            <MdGroup className="icon" size={60} color="#FFF" />
            <h5>Colabore</h5>
            <p>Leve seus quadros de trabalho com você, visualize e compartilhe tarefas com seu grupo de trabalho.</p>
          </li>
        </ul>
      </content>
      <footer>
        <p>Ferramenta desenvolvida por <strong>@lmacedopro</strong> com a finalidade de estudos. 
          Portanto é Open Source e livre de qualquer cobrança. E sempre será! - 
          <strong> Github.com/lmacedopro</strong></p>
      </footer>
    </Container> 
  );
};