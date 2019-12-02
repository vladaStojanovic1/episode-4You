import React from 'react';
import './.ShowCard.css';


const ShowCard = ({ shows }) => {


    return (
        <>
            {shows.map((show, index) => {
                return (
                    <div className='show-card' key={index}>
                        <img src={show.image} />
                        <h5 >{show.name}</h5>
                        <span style={{
                            background: '#00CDBF',
                            color: 'black',
                            fontWeight: 'bold'
                        }}>{show.rating}</span>
                    </div>
                )
            })}
        </>
    );
}

export default ShowCard;
