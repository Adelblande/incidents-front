import React from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdSend } from 'react-icons/md';

import { Container } from './styles';

export default function Edit() {
  const { state } = useLocation();
  async function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={state}>
        <Input type="hidden" name="id" />
        <Input name="name" placeholder="Name" />
        <Input name="username" placeholder="Username" />
        <Input name="email" placeholder="E-mail" />
        <Input name="phone" placeholder="Phone" />
        <Input name="website" placeholder="Web Site" />
        <button type="submit">
          <MdSend size={20} color="#fff" />
        </button>
      </Form>

    </Container>
  );
}


