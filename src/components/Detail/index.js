import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { Container } from './styles';

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

  return (
    <Container>
      <header>
        <h1>{info && info.title}</h1>
      </header>

    </Container>
  );
};
