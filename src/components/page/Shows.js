import React, { useState, useEffect } from 'react';
import { Show } from '../entities/Show';
import SearchBar from '../SearchBar';
import GridLoader from 'react-spinners/GridLoader';
import ShowCard from '../ShowCard';
import '../page/.Show.css';
import Loader from 'react-loader-spinner'

const Shows = () => {

    /********* State ********/
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ascending, setAscending] = useState(true);
    /********* State ********/

    useEffect(() => {
        fetchShows()
    }, [])


    const fetchShows = async () => {
        const data = await fetch('http://api.tvmaze.com/shows');
        const showsRes = await data.json();

        const newShows = showsRes.map((show) => {
            return new Show(show.name, show.image.medium, show.rating.average, show.id)
        })
        // Sort by abc
        const sortedByRating = newShows.sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
        })
        setShows(sortedByRating);
        setLoading(false)
    }




    return (
        <div style={{ textAlign: 'center' }}>
            <SearchBar shows={shows} setShows={setShows} />
            <h1 className='popular-shows'>Popular Shows</h1>

            {loading ? <Loader type='Plane' width={400} height={400} color='#00CDBF' /> :

                <div className='shows-content'>
                    <ShowCard shows={shows} />
                </div>}
        </div>
    );
}

export default Shows;
