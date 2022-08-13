import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Roster from './Roster';
import Header from './Header';

function Team() {
  const [teams, setTeams] = useState([]);
  const [teamId, setTeamId] = useState(1);
  
  useEffect(() => {
    axios
      .get('https://statsapi.web.nhl.com/api/v1/teams/')
      .then(({ data }) => setTeams(data.teams))
  }, [])

  return (
    <>
      <Header />
      <ol className='m-3'>
        {
          teams.map(team => (
          <Roster teamId={teamId} team={team} />
        ))
        }
      </ol>
    </>
  )
}

export default Team;