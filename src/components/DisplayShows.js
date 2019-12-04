import React from 'react';
import './.ShowCard.css';
import DisplayCard from './DisplayCard';
import DisplayList from './DisplayList';
import './.DisplayCard.css';

const DisplayShows = ({ shows, cardList }) => {


    return (
        <>
            {cardList ?
                <div className='shows-content-card'><DisplayCard shows={shows} /></div> :
                <div className='shows-content-list'><DisplayList shows={shows} /></div>
            }
        </>
    );
}

export default DisplayShows;
