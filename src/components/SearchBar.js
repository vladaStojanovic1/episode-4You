import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Error from './Error';
import './.SearchBar.css';



const SearchBar = ({ shows, setShows }) => {

    /***** State****/
    const [error, setError] = useState(false);
    const [filterShows, setFilterShows] = useState('');
    /***** State****/

    /******* Filter ********/
    useEffect(() => {
        const fill = shows.filter(show => {
            return show.name.toLowerCase().includes(filterShows.toLowerCase())
        })

        if (filterShows && fill.length === 0) {
            setError(true);
        } else {
            setError(false)
        }

        if (filterShows.length) {
            return setShows(fill)
        } else {
            return setShows(shows)
        }
    }, [filterShows])
    /******* Filter ********/

    const handleFilter = (e) => {
        setFilterShows(e.target.value)
        const storage = JSON.parse(localStorage.getItem('my-shows'));
        if (storage) {
            setShows(storage)
        }
    }

    return (
        <div className='search-bar'>
            <FaSearch />
            <input type="text"
                value={filterShows}
                onChange={handleFilter}
                className='input-search'
                placeholder='Search Shows' />
            {error ? <Error /> : <h1>Popular Shows</h1>}
        </div>
    );
}

export default SearchBar;
