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
      .then(({ data }) => {
        const sorted = data.teams.sort((a, b) => {
          if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
        })
        setTeams(sorted)
    })
  }, [])



  return (
    <>
      <Header />
      <div className='teamListContainer d-inline-flex p-2'>
        <ol className='m-3'>
          {
            teams.map(team => (
              <div key={team.id} onClick={() => setTeamId(team.id)}>
                <Roster teamId={team.id} team={team} />
              </div>
            ))
          }
        </ol>
      </div>
    </>
  )
}

export default Team;