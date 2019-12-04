import React, { useState, useEffect } from 'react';
import { Episode } from '../entities/Episode';
import DisplayEpisodes from '../DisplayEpisodes';
import '../page/.Episodes.css';
import { Link } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";


const Episodes = ({ match }) => {

    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true)


    const fetchEpisodes = async () => {
        const data = await fetch(`http://api.tvmaze.com/shows/${match.params.id}/episodes`);
        const dataEpisodes = await data.json();

        const episode = dataEpisodes.map((episode) => {
            return new Episode(episode.name, episode.image.medium, episode.number, episode.season)
        })
        setEpisodes(episode);
        setLoading(false)
    }

    useEffect(() => {
        fetchEpisodes()
    }, [])

    return (
        <div className='episode-div' style={{ minHeight: '100%' }}>
            <h4 className='back-link'>
                <Link to={`/showinfo/${match.params.id}`}>Show Info</Link>
            </h4>
            <DisplayEpisodes episodes={episodes} />
            {loading ? <div className='loader'><GridLoader size={100} color={'#00CDBF'} /></div> : null}
        </div>
    );
}

export default Episodes;
