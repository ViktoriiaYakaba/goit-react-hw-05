import { fetchMovieCast } from "./MovieApi";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            const castData = await fetchMovieCast(movieId);
            setCast(castData);
        };
        fetchCast();
    }, [movieId]); 

    return (
        <div>
            <h2>Movie Cast</h2>
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>
                        {actor.profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} width="130" />
                        ) : (
                            <div>No Image Available</div>
                        )}
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieCast;

