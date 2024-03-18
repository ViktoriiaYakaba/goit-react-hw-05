import { fetchMovieCast } from "./MovieApi";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        const fetchCast = async () => {
                const castData = await fetchMovieCast(movieId);
            setCast(castData);
            console.log(5)
        };
        fetchCast();
    }, [movieId]); 

    return (
     
        <div>
            <h2>Movie Cast</h2>
            <ul>
                {cast && cast.map(actor => (
                    <li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default MovieCast;
