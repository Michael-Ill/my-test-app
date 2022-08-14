import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerInfo from './PlayerInfo';

const Player = ({playerId, currentPlayerId}) => {
    const [player, setPlayer] = useState({})
    
    useEffect(() => {
       playerId && axios
          .get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}`)
          .then(({ data }) => setPlayer(data.people[0]))
      }, [playerId])

    

    return (
        <>
        { 
        player.id === currentPlayerId &&
        <PlayerInfo player={player} />
        }
        </>
    )
}

export default Player;