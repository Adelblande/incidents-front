import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdSend } from 'react-icons/md';

import { Container } from './styles';

import { api } from '../../services/api';

const schema = Yup.object().shape({
  id: Yup.number()
    .required(),
  title: Yup.string()
    .required('O Titulo é obrigatório.'),
  description: Yup.string()
    .min(10)
    .required('A Descrição é obrigatório.'),
  criticality: Yup.string()
    .required('Selecione a Criticidade.'),
  type_incident_id: Yup.number()
    .required('Selecione o Tipo.'),
  status: Yup.string()
    .required('Selecione o Status.'),

});

export default function Edit() {
  const { state } = useLocation();
  const history = useHistory();

  async function handleSubmit(data) {
    console.log(data);
    const incident = await api.put(`/incidents/${state.id}`, data);
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
  const optStatus = [
    { id: 'Aberto', title: 'Aberto' },
    { id: 'Fechado', title: 'Fechado' },
  ];
  return (
    <Container>
      <h1>Editar Incidente</h1>
      <div>
        <Form schema={schema} onSubmit={handleSubmit} initialData={state}>
          <Input name="id" type="hidden" />
          <Input name="title" placeholder="Titulo" />
          <Input name="description" placeholder="Descrição" />
          <Select name="criticality" options={optCriticality} />
          <Select name="type_incident_id" options={optType} />
          <Select name="status" options={optStatus} />
          <button type="submit">
            <MdSend size={20} color="#fff" />
          </button>
        </Form>
      </div>
    </Container>
  );
}


