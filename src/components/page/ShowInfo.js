import React, { useEffect, useState } from 'react';
import { Actor } from '../entities/Actor';
import ShowDescription from '../ShowDescription';
import Loader from 'react-loader-spinner'

const ShowInfo = ({ match }) => {
    /***************** State *****************/
    const [actorInfo, setActorInfo] = useState([]);
    const [showInfo, setShowInfo] = useState({ name: '', descriptions: '', image: '', rating: '', genres: '' })
    const [loading, setLoading] = useState(true)
    const [genres, setGenres] = useState();
    const [episodesNumber, setEpisodesNumber] = useState('');
    /***************** State *****************/

    useEffect(() => {
        fetchCast();
    }, [])

    const fetchCast = async () => {
        const data = await fetch(`http://api.tvmaze.com/shows/${match.params.id}?embed[]=episodes&embed[]=cast`);
        const dataCast = await data.json();

        const actor = dataCast._embedded.cast.map((actor) => {
            return new Actor(actor.person.name, actor.person.image.medium);
        })
        setEpisodesNumber(dataCast._embedded.episodes.length)
        setShowInfo({ name: dataCast.name, descriptions: dataCast.summary, image: dataCast.image.original, rating: dataCast.rating.average, genres: dataCast.genres });
        setGenres(dataCast.genres)
        setActorInfo(actor)
        setLoading(false)
    }


    return (

        // {loading ? <Loader type='Plane' width={200} height={400} color='#00CDBF' /> : null}
        <div style={{ minHeight: '100%', width: '55%', margin: 'auto' }}>
            <ShowDescription showInfo={showInfo} episodesNumber={episodesNumber} genres={genres} />
        </div>
    );
}

export default ShowInfo;
