import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { BoxContainer, BoxCard, BoxIcons, BoxSection, ButtonAdd, Titulo } from './styles';

import { FaRegEdit, FaRegTrashAlt, FaPlus } from 'react-icons/fa';

export default function Home() {
  const [incidents, setIncidents] = useState();
  // const [incVez, setIncVez] = useState();
  const history = useHistory()

  useEffect(() => {
    async function getDataIncidents() {
      const { data } = await api.get('/incidents');
      setIncidents(data);
    }
    getDataIncidents()
  }, []);


  function Delete(incident) {
    api.delete(`/incidents/${incident.id}`);
    const incidentsFiltered = incidents.filter(el => {
      return el !== incident
    })
    setIncidents(incidentsFiltered)
  }

  function handleEdit(incident) {
    history.push('/edit', incident);
  }

  function handleCreate() {
    history.push('/create');
  }

  return (
    <>
      <Titulo>Incidentes</Titulo>
      <BoxContainer>
        {
          incidents && incidents.map(incident => (
            <BoxCard key={incident.id}>
              <header>
                {incident.title}
                <BoxIcons>
                  <FaRegEdit size={20} title="Editar" onClick={() => handleEdit(incident)} />
                  <FaRegTrashAlt size={20} title="Deletar" onClick={() => Delete(incident)} />
                </BoxIcons>
              </header>

              <BoxSection>
                <Link to={{
                  pathname: `/detail`,
                  state: {
                    incVez: incident.id,
                  }
                }}>
                  Detalhes
                </Link>

              </BoxSection>

            </BoxCard>
          ))
        }
        <ButtonAdd onClick={() => handleCreate()}>
          <FaPlus size={30} color="#fff" title="Adicionar Incidente" />
        </ButtonAdd>
      </BoxContainer>
    </>
  )
};
