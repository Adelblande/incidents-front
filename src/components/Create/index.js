import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { MdSend } from 'react-icons/md';

import { Container } from './styles';

import { api } from '../../services/api';

const schema = Yup.object().shape({
  title: Yup.string()
    .required('O Titulo é obrigatório.'),
  description: Yup.string()
    .min(10)
    .required('A Descrição é obrigatório.'),
  criticality: Yup.string()
    .required('Selecione a Criticidade.'),
  type_incident_id: Yup.string()
    .required('Selecione o Tipo.'),

});

export default function Edit() {
  const history = useHistory();

  async function handleSubmit(data) {
    data.status = 'Aberto';
    console.log(data);
    const incident = await api.post(`/incidents`, data);
    if (incident.status === 200) {
      history.push('/');
    }
  }
  const optCriticality = [
    { id: 'Alta', title: 'Alta' },
    { id: 'Média', title: 'Média' },
    { id: 'Baixa', title: 'Baixa' }
  ];

  const optType = [
    { id: 1, title: 'Ataque Brute Force' },
    { id: 2, title: 'Credencias vazadas' },
    { id: 3, title: 'Ataque de DDoS' },
    { id: 4, title: 'Atividades anormais de usuários' }
  ];

  return (
    <Container>
      <h1>Novo Incidente</h1>
      <div>
        <Form schema={schema} onSubmit={handleSubmit} >
          <Input name="title" placeholder="Titulo" />
          <Input name="description" placeholder="Descrição" />
          <Select name="criticality" options={optCriticality} placeholder="Criticidade" />
          <Select name="type_incident_id" options={optType} placeholder="Tipo" />
          <button type="submit">
            <MdSend size={20} color="#fff" />
          </button>
        </Form>
      </div>
    </Container>
  );
}


