import React from 'react';
import './.ActorInfo.css';


const ActorInfo = ({ actorInfo }) => {

    return (
        <>
            <h1 className='actor-title'>Actors</h1>
            <div className='actor-info'>
                {actorInfo.map((actor, index) => {
                    return (
                        <div className='actor-item' key={index}>
                            <img src={actor.actorPicture} alt="" />
                            <span>{actor.actorName}</span>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default ActorInfo;
