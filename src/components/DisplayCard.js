import React from 'react';

const DisplayCard = ({ shows }) => {

    return (
        <>
            {shows.map((show, index) => {
                return (
                    <div className='show-card' key={index}>
                        <img src={show.image} />
                        <h5 style={{ marginTop: '10px' }}>{show.name}</h5>
                        <span>{show.rating}</span>
                    </div>
                )
            })}

        </>
    )
}

export default DisplayCard;
