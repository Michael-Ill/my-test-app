import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from './Player';


const Roster = ({ teamId, currentTeamId }) => {
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



    return (
        <>
            <ul>
                {
                    roster.map(eachPlayer => (
                        <div>
                            {
                                // currentTeamId === teamId &&
                                <li key={eachPlayer.person.id}>
                                    <p className='m-1' onClick={() => setPlayerId(eachPlayer.person.id)}>{eachPlayer.person.fullName} - {eachPlayer.position.abbreviation}</p>
                                    <Player playerId={playerId} currentPlayerId={eachPlayer.person.id} />
                                </li>
                            }
                        </div>
                    ))
                }
            </ul>
        </>
    )
}

export default Roster;