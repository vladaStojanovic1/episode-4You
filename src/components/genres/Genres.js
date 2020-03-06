import React from 'react';
import './.Genres.css';

const Genres = ({ showInfo }) => {

    const { genres } = showInfo;
    return (
        <div className='genre'>
            {genres ? genres.map((genre, index) => {
                return (
                    <div key={index} className='genre-item'>{genre}</div>
                )
            }) : null}
        </div>
    );
}

export default Genres;
