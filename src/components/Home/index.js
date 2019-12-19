import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { BoxContainer, BoxCard, BoxIcons, BoxSection, ButtonAdd } from './styles';

import { FaUserEdit, FaTrashAlt, FaUserPlus } from 'react-icons/fa';

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
    history.push('/edit', { ...incident });
  }

  return (

    <BoxContainer>
      {
        incidents && incidents.map(incident => (
          <BoxCard key={incident.id}>
            <header>
              {incident.title}
              <BoxIcons>
                <FaUserEdit size={20} title="Edit" onClick={() => handleEdit(incident)} />
                <FaTrashAlt size={20} title="Delete" onClick={() => Delete(incident)} />
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
      <ButtonAdd onClick={() => { }}>
        <FaUserPlus size={30} color="#fff" />
      </ButtonAdd>
    </BoxContainer>

  )
};
