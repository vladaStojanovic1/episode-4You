import React from 'react';
import { FiGrid } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import './.ButtonListCard.css';
import Error from './Error'
import { FaSort } from "react-icons/fa";

const ButtonListCard = ({ handleSort, changeView, cardList, ascending, error }) => {
    return (

        <>
            <h1 className='title-show'>Popular Shows</h1>

            {error ? <Error /> :

                <div className='btn-div'>
                    <button className='sort-btn' onClick={handleSort}><FaSort /> {ascending ? 'Top 50 Imdb ' : 'Sort by abc'}<FaSort /></button>
                    {cardList ? <FaList className='icons-view' onClick={changeView} /> : <FiGrid className='icons-view' onClick={changeView} />}
                </div>}
        </>

    );
}

export default ButtonListCard;
