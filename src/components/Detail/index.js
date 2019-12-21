import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

import { api } from '../../services/api';
import { Container, BoxCard } from './styles';

export default function Detail(props) {
  const { incVez } = props.location.state;
  const [info, setInfo] = useState()

  useEffect(() => {
    async function getInfos() {
      const { data } = await api.get(`/incidents/${incVez}`);
      setInfo(data);
    }
    getInfos()
  }, [incVez]);

  const data_cri = info && moment(info.created_at).format('DD/MM/YYYY');
  const data_atualiza = info && moment(info.updated_at).format('DD/MM/YYYY');
  return (
    <Container>
      <h1>Detalhes do Incidente</h1>
      <BoxCard>

        <header>
          {info && info.title}
        </header>
        <main>
          <p>
            <span>Descrição: </span>{info && info.description}
          </p>
          <p>
            <span>Criticidade: </span>{info && info.criticality}
          </p>
          <p>
            <span>Status: </span>{info && info.status}
          </p>
          <p>
            <span>Tipo: </span>{info && info.type.type}
          </p>

        </main>
        <footer>
          <div>
            <span>Criação: </span>{info && data_cri}
          </div>
          <div>
            <span>Atualização: </span>{info && data_atualiza}
          </div>


        </footer>
      </BoxCard>
    </Container>
  );
};
