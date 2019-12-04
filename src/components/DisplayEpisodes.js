import React from 'react';
import './.DisplayEpisodes.css';

const DisplayEpisodes = ({ episodes }) => {


    return (
        <div style={{ minHeight: '100%' }} className='episode-content'>
            {episodes.map((episode, index) => {
                return (
                    <div className='episode-item' key={index}>
                        <img src={episode.image} />
                        <span className='name'>{episode.name}</span>
                        <span className='episode'>Episode: {episode.number}</span>
                        <span className='season'>Season: {episode.season}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayEpisodes;
