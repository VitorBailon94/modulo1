import React from 'react';

import Logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const User: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="Logo IMG" />
      <form>
        <input placeholder="Nome" />
        <input placeholder="CPF" />
        <input placeholder="RG" />
        <input placeholder="Titulo Editor" />
        <input placeholder="Pis" />
        <input placeholder="Nome do Pai" />
        <input placeholder="Nome da Mãe" />
        <select name="cmbEstadoCivil" id="cmbEstadoCivil">
          <option value=""> -- Selecione -- </option>
          <option value="SOLTERIO">Solteiro</option>
          <option value="CASADO">Casado</option>
          <option value="VIUVO">Viúvo</option>
        </select>
      </form>
    </Content>
    <Background />
  </Container>
);

export default User;
