import React from 'react';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';


const DisplayCard = ({ shows }) => {

    return (
        <>
            {shows.map((show, index) => {
                return (
                    <Link to={`showinfo/${show.id}`} key={index} className='card-link'>
                        <Flip left cascade>
                            <div className='show-card' >
                                <img src={show.image} alt='' />
                                <h5 style={{ marginTop: '10px' }}>{show.name}</h5>
                                <span>{show.rating}</span>
                            </div>
                        </Flip>
                    </Link>
                )
            })}

        </>
    )
}

export default DisplayCard;
