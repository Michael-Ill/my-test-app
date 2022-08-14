import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from './Player';


const Roster = ({ teamId, team }) => {
    const [roster, setRoster] = useState([]);
    const [playerId, setPlayerId] = useState(null)
    const [active, setActive] = useState(false)


    useEffect(() => {
        axios
            .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/roster`)
            .then(({ data }) => {
                const sorted = data.roster.sort((a, b) => {
                    if (a.person.fullName > b.person.fullName) {
                        return 1
                    }
                    if (a.person.fullName < b.person.fullName) {
                        return -1
                    }
                    return 0
                })
                console.log(sorted)
                setRoster(sorted)

            })
            .catch(error => console.log(error))
    }, [teamId])

    function changeFont(e) {
        e.target.style.color = "black"
    }

    function defaultFont(e) {
        e.target.style.color = "white"
    }



    return (
        <li key={team.id}>
            <button onMouseOver={changeFont} onMouseLeave={defaultFont} className='btn btn-primary btn-block m-1' onClick={() => setActive(!active)}>{team.name}</button>
            {active &&
                <ul>
                    {
                        roster.map(eachPlayer => (
                            <div>
                                {
                                    <li key={eachPlayer.person.id}>
                                        <p className='playerList m-1' onMouseEnter={(e) => e.target.style.color="blue"} onMouseLeave={(e) => e.target.style.color="black"} onClick={() => setPlayerId(eachPlayer.person.id)}>{eachPlayer.person.fullName} - {eachPlayer.position.abbreviation}</p>
                                        <Player playerId={playerId} currentPlayerId={eachPlayer.person.id} />
                                    </li>
                                }
                            </div>
                        ))
                    }
                </ul>
            }
        </li>
    )
}

export default Roster;
