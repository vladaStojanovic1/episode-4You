import React from 'react';
import { FiGrid } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import { MdArrowDownward } from "react-icons/md";
import './.ButtonListCard.css';
import Error from './Error'


const ButtonListCard = ({ handleSort, changeView, cardList, ascending, error }) => {
    return (

        <>
            <h1>Popular Shows</h1>
            {error ? <Error /> : <div className='btn-div'>
                <button className='sort-btn' onClick={handleSort}><MdArrowDownward /> {ascending ? 'Top 50 Imdb ' : 'Sort by abc'}<MdArrowDownward /></button>
                {cardList ? <FaList className='icons-view' onClick={changeView} /> : <FiGrid className='icons-view' onClick={changeView} />}
            </div>}
        </>

    );
}

export default ButtonListCard;
