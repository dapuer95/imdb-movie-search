import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

const Info = () => {

    const API_KEY = '8d876c08';
    const {id} = useParams();
    const [info, setInfo] = useState({});
    const {Title, Poster, Actors, Plot, Year, Type, totalSeasons, Runtime, Director, imdbRating} = info;
    const [pill, setPill] = useState([]);

    // const getData = () => {
    //     fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    //     .then(res => res.json())
    //     .then(result => {
    //         setInfo(result)
    //         setPill(result.Genre.split(','))
    //     })
    // }

    const getData = async () => {
       const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
       const result = await(res.json());
    //    console.log(result); 
        setInfo(result);
        setPill(result.Genre.split(','));
    }


    useEffect(() => {
        getData();
    },[])


    return(
        <div className='container'>
            {/* {
                getData()
            } */}
            <h1 className='mt-4 '>{Title}</h1>
            <p>{Type} {Year} Seasons: {totalSeasons} Run time: {Runtime}</p>
            <img src={Poster} alt="movie poster" className='mb-3'/>
            <div>
            {
               pill.map(item => {
                        return <span key={item} className="badge rounded-pill bg-primary">{item}</span>
                    })
           }
            </div>
           
            <p className='mt-3'>Plot: {Plot}</p>
            <hr />
            <p>Actors: {Actors}</p>
            <div>
            </div>
            <hr />
            <p>Director: {Director}</p>
            <hr />
            <span className="badge rounded-pill bg-warning text-dark mb-5">IMDB rating: {imdbRating}</span>
        </div>
    )
}

export default Info;