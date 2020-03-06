import React, { useEffect, useState } from 'react';
import { Actor } from '../../entities/Actor';
import ShowDescription from '../../components/showDescription/ShowDescription';
import ActorInfo from '../../components/actorInfo/ActorInfo';
import GridLoader from "react-spinners/GridLoader";
import './.ShowInfo.css';

const ShowInfo = ({ match }) => {
    /***************** State *****************/
    const [actorInfo, setActorInfo] = useState([]);
    const [showInfo, setShowInfo] = useState({ name: '', descriptions: '', image: '', rating: '', genres: '', id: '' })
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
        console.log(dataCast);

        const actor = dataCast._embedded.cast.map((actor) => {
            return new Actor(actor.person.name, actor.person.image.medium);
        })
        setEpisodesNumber(dataCast._embedded.episodes.length)
        setShowInfo({
            name: dataCast.name,
            descriptions: dataCast.summary,
            image: dataCast.image.original,
            rating: dataCast.rating.average,
            genres: dataCast.genres,
            id: dataCast.id
        });
        setGenres(dataCast.genres)
        setActorInfo(actor)
        setLoading(false)
    }

    return (
        <div style={{ minHeight: '100%' }} >
            {loading ? <div className='loader'><GridLoader size={100} color={'#00CDBF'} /></div> :
                <div className='show-info-content'>
                    <ShowDescription
                        showInfo={showInfo}
                        episodesNumber={episodesNumber}
                        genres={genres} />
                    <ActorInfo actorInfo={actorInfo} />
                </div>
            }
        </div>
    );
}

export default ShowInfo;
