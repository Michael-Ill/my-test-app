// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {

  const [teams, setTeams] = useState([])
  const [roster, setRoster] = useState([])
  const [id, setId] = useState(0)


  useEffect(() => {
    axios
      .get('https://statsapi.web.nhl.com/api/v1/teams/')
      .then(({ data }) => setTeams(data.teams))
  }, [])

  useEffect(() => {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`)
      .then(({ data }) => setRoster(data.roster))
  }, [id])

  // console.log(roster)

  return (
    <ol>
      {
        teams.map(team => (
          <li key={team.id}>
            <h3 onClick={() => setId(team.id)}>{team.name}</h3>
            <div>
              {
                roster.map(player => (
                  <div>
                    {
                      team.id === id &&
                      <div key={player.person.id}>
                        <p className='m-1'>{player.person.fullName} - {player.position.name}</p>
                      </div>
                    }
                  </div>
                ))
              }
            </div>
          </li>
        ))
      }
    </ol>
  )

}
export default App;

