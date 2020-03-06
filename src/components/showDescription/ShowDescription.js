import React from 'react';
import './.ShowDescription.css';
import Genres from '../genres/Genres';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ShowDescription = ({ showInfo, episodesNumber }) => {

    return (
        <div className='show-info' >
            <div className='show-info-img'>
                <img src={showInfo.image} alt="" />
            </div>
            <div className="show-info-description">
                <h1>{showInfo.name}</h1>
                <Genres showInfo={showInfo} />
                <h3><FaStar className='icon-star' />{showInfo.rating}</h3>

                <Link to={`/showinfo/${showInfo.id}/episodes`}>
                    <h4>See all Episodes: {episodesNumber}</h4>
                </Link>
                <p className='description-text' dangerouslySetInnerHTML={{ __html: showInfo.descriptions }} />
            </div>
        </div>
    );
}

export default ShowDescription;
