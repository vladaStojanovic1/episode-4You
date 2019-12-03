import React from 'react';
import Flip from 'react-reveal/Flip';

const DisplayCard = ({ shows }) => {

    return (
        <>
            {shows.map((show, index) => {
                return (
                    <Flip left cascade>
                        <div className='show-card' key={index}>
                            <img src={show.image} />
                            <h5 style={{ marginTop: '10px' }}>{show.name}</h5>
                            <span>{show.rating}</span>
                        </div>
                    </Flip>
                )
            })}

        </>
    )
}

export default DisplayCard;
