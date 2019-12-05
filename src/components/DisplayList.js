import React from 'react';
import './.DisplayList.css';
import { FaStar } from "react-icons/fa";
import HeadShake from 'react-reveal/HeadShake';
import { Link } from 'react-router-dom';

const DisplayList = ({ shows }) => {
    return (
        <>
            {shows.map((show, index) => {
                return (
                    <Link to={`showinfo/${show.id}`} className='list-link' key={index}>
                        <HeadShake>
                            <div className='show-list' >
                                <div className='image-list-div'>
                                    <img className='image-list' src={show.image} alt='' />
                                </div>

                                <div className='list-info'>
                                    <h2>{show.name}</h2>
                                    <h5>{show.genres.join(' | ')}</h5>
                                    <span className='list-rating'><FaStar className='icon-star' />{show.rating}</span>
                                    <p>Premiered: <span>{show.premiered}</span></p>
                                </div>
                            </div>
                        </HeadShake>
                    </Link>
                )
            })}

        </>
    )
}

export default DisplayList;
