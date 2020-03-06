import React from 'react';
import './.ShowCard.css';
import '../displayCard/.DisplayCard.css'
import DisplayCard from '../displayCard/DisplayCard';
import DisplayList from '../displayList/DisplayList';

const DisplayShows = ({ shows, cardList }) => {

    return (
        <>
            {cardList
                ? <div className='shows-content-card'><DisplayCard shows={shows} /></div>
                : <div className='shows-content-list'><DisplayList shows={shows} /></div>
            }
        </>
    );
}

export default DisplayShows;
