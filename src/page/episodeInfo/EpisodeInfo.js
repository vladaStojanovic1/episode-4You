import React, { useState, useEffect } from 'react';
import DisplayEpisodeInfo from '../../components/displayEpisodeInfo/DisplayEpisodeInfo';
import GridLoader from "react-spinners/GridLoader";

const EpisodeInfo = ({ match }) => {

    /********** State  ***********/
    const [episodeInfo, setEpisodeInfo] = useState({ name: '', number: '', season: '', image: '', summary: '', url: '' });
    const [loading, setLoading] = useState(true);
    /********** State  ***********/

    const { episodeId } = match.params;
    const fetchEpisodeInfo = async () => {
        const data = await fetch(`http://api.tvmaze.com/episodes/${episodeId}`);
        const dataEpisodeInfo = await data.json();

        const newEpisodeInfo = {
            name: dataEpisodeInfo.name,
            number: dataEpisodeInfo.number,
            season: dataEpisodeInfo.season,
            image: dataEpisodeInfo.image.original,
            summary: dataEpisodeInfo.summary,
            url: dataEpisodeInfo.url
        }
        setEpisodeInfo(newEpisodeInfo)
        setLoading(false)
    }

    useEffect(() => {
        fetchEpisodeInfo()
    }, [])

    return (
        <div style={{ minHeight: '100%' }} >
            {loading ?
                <div className='loader'><GridLoader size={100} color={'#00CDBF'} /></div> :
                <DisplayEpisodeInfo
                    episodeInfo={episodeInfo}
                    episodeId={episodeId}
                    showId={match.params.id}
                />}
        </div>
    );
}

export default EpisodeInfo;
