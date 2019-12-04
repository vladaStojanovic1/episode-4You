import React from 'react';
import './.DisplayEpisodeInfo.css';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineNumber } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DisplayEpisodeInfo = ({ episodeInfo, episodeId, showId }) => {

    return (
        <div className='episodeInfo-content'>

            <Link to={`/showinfo/${showId}/episodes/${episodeId}`}>
                <button className='back-btn'> &larr; Back to Episodes</button>
            </Link>
            <div className='episode-img-div'>
                <img src={episodeInfo.image} alt="" />
            </div>
            <div className="episode-info">
                <div>
                    <p className='episode-num'>Episode: <AiOutlineNumber /><span>{episodeInfo.number}</span></p>
                    <p className='episode-season'>Season: <span>{episodeInfo.season}</span></p>
                </div>
                <div>
                    <a className='url' href={episodeInfo.url} target='_blank' rel="noopener noreferrer">Episode URL</a>
                </div>
            </div>
            <div className="summary">
                <h3><FaPlay />&nbsp;{episodeInfo.name}</h3>
                <p className='summary-text' dangerouslySetInnerHTML={{ __html: episodeInfo.summary }} />
            </div>
        </div>
    );
}

export default DisplayEpisodeInfo;
