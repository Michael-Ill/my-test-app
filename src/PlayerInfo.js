import React from 'react';

const PlayerInfo = ({ player }) => {
    
    return (
        <div className='playerInfoContainer mx-3 my-3 px-1 '>
           <p> Birthdate: {player.birthDate}</p>
           <p> Born: {player.birthCity}, {player.birthStateProvince}, {player.birthCountry}</p>
           <p> Nationality: {player.nationality}</p>
           <p> Height: {player.height} in</p>
           <p> Weight: {player.weight} lbs</p>
           <p> Handed: {player.shootsCatches}</p>
        </div>
    );
};

export default PlayerInfo;