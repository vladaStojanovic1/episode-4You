import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './.SearchBar.css';

const SearchBar = ({ filterShows, handleFilter }) => {

    return (
        <div className='search-bar'>
            <FaSearch />
            <input type="text"
                value={filterShows}
                onChange={handleFilter}
                className='input-search'
                placeholder='Search Shows' />
        </div>
    );
}

export default SearchBar;
