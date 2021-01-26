import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';

import Logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo IMG" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Login</Button>

          <a href="forgot">Esqueci minha Senha</a>
        </Form>
        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  )
};

export default SignIn;
