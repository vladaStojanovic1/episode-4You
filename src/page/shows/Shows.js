import React, { useState, useEffect } from 'react';
import { Show } from '../../entities/Show';
import SearchBar from '../../components/searchBar/SearchBar';
import DisplayShows from '../../components/displayShows/DisplayShows';
import '../shows/.Shows.css';
import ButtonListCard from '../../components/buttonListCard/ButtonListCard';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import GridLoader from "react-spinners/GridLoader";

const Shows = () => {
    // Get list or card UI
    const card = JSON.parse(localStorage.getItem('list-card'))
    /***************** State *****************/
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ascending, setAscending] = useState(true);
    const [cardList, setCardList] = useState(card);
    const [error, setError] = useState(false);
    const [filterShows, setFilterShows] = useState('');
    /***************** State *****************/

    /********** Use Effect *************/
    useEffect(() => {
        fetchShows()
    }, [])

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
    /********** Use Effect *************/

    const fetchShows = async () => {
        const data = await fetch('http://api.tvmaze.com/shows');
        const showsRes = await data.json();

        const newShows = showsRes.map((show) => {
            return new Show(show.name, show.image.medium, show.rating.average, show.id, show.genres, show.premiered)
        })
        // Sort by abc
        const sortedByAbc = newShows.sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
        })
        setShows(sortedByAbc);
        setLoading(false)
        localStorage.setItem('my-shows', JSON.stringify(newShows));
    }

    // Sort and slice top 50 Shows
    const handleSort = () => {
        if (ascending) {
            const sortedByRating = shows.sort((a, b) => b.rating - a.rating).slice(0, 50);
            setShows(sortedByRating)
            setAscending(false)
        } else {
            const storage = JSON.parse(localStorage.getItem('my-shows'))
            setShows(storage)
            setAscending(true)
        }
    }
    // Change UI Card or List
    const changeView = () => {
        const newView = !cardList;
        setCardList(newView)
        localStorage.setItem('list-card', newView);
    }

    // Filter Shows
    const handleFilter = (e) => {
        setFilterShows(e.target.value)
        const storage = JSON.parse(localStorage.getItem('my-shows'));
        if (storage) {
            setShows(storage)
        }
    }

    return (
        <div className='shows-content'>
            <SearchBar filterShows={filterShows} handleFilter={handleFilter} />
            {!loading ? <ButtonListCard
                handleSort={handleSort}
                changeView={changeView}
                cardList={cardList}
                ascending={ascending}
                error={error}
            /> : null}
            <DisplayShows shows={shows} cardList={cardList} />
            {loading ? <div className='loader'><GridLoader color={'#00CDBF'} size={95} /></div> : null}
        </div>
    );
}

export default Shows;
