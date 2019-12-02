import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Error from './Error';
import './.SearchBar.css';



const SearchBar = ({ shows, setShows }) => {

    const [error, setError] = useState(false);

    return (
        <div className='search-bar'>

            <FaSearch />
            <input type="text"
                className='input-search'
                placeholder='Search Shows' />
            {error ? <Error /> : null}
        </div>
    );
}

export default SearchBar;
