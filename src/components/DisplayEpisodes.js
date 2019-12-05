import React from 'react';
import './.DisplayEpisodes.css';
import { Link } from 'react-router-dom';

const DisplayEpisodes = ({ episodes, showId }) => {


    return (
        <div className='episode-content'>

            {episodes.map((episode, index) => {

                return (
                    <Link to={`/showinfo/${showId}/episodes/${episode.id}/episode`} key={index}>
                        <div className='episode-item' >
                            <img src={episode.image} alt='' />
                            <span className='name'>{episode.name}</span>
                            <span className='episode'>Episode: {episode.number}</span>
                            <span className='season'>Season: {episode.season}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default DisplayEpisodes;
