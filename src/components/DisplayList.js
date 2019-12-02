import React from 'react';
import './.DisplayList.css';
import { FaStar } from "react-icons/fa";

const DisplayList = ({ shows }) => {
    return (
        <>
            {shows.map((show, index) => {
                return (
                    <div className='show-list' key={index}>
                        <div className='image-list-div'>
                            <img className='image-list' src={show.image} />
                        </div>

                        <div className='list-info'>
                            <h2>{show.name}</h2>
                            <h5>{show.genres.join(' | ')}</h5>
                            <span className='list-rating'><FaStar className='icon-star' color="lime" />{show.rating}</span>
                            <p>Premiered: <span>{show.premiered}</span></p>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default DisplayList;
