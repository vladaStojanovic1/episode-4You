import React, { useState, useEffect } from 'react';
import { Episode } from '../../entities/Episode';
import DisplayEpisodes from '../../components/displayEpisodes/DisplayEpisodes';
import '../episodes/.Episodes.css';
import { Link } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";

const Episodes = ({ match }) => {
    /************** State ***************/
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true)
    /************** State ***************/

    const fetchEpisodes = async () => {
        const data = await fetch(`http://api.tvmaze.com/shows/${match.params.id}/episodes`);
        const dataEpisodes = await data.json();

        const episode = dataEpisodes.map((episode) => {
            return new Episode(episode.name, episode.image.medium, episode.number, episode.season, episode.id)
        })
        setEpisodes(episode);
        setLoading(false)
    }

    useEffect(() => {
        fetchEpisodes()
    }, [])

    return (
        <div className='episode-div'>

            <div className='back-div'>
                <Link to={`/showinfo/${match.params.id}`}>
                    <button> &larr; Back to Show</button>
                </Link>
            </div>

            <DisplayEpisodes episodes={episodes} showId={match.params.id} />
            {loading ? <div className='loader'><GridLoader size={100} color={'#00CDBF'} /></div> : null}
        </div>
    );
}

export default Episodes;
