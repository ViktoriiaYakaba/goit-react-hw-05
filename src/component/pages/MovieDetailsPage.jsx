import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../MovieApi";
import { useParams, Link } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';


const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
 
    useEffect(() => {
        const detailsMovie = async () => {
                const details = await fetchMovieDetails(movieId);
                setMovie(details);
            
        };
        detailsMovie();
    }, [movieId]); 

 const formatScore = (score) => {
        return `${score * 10}%`;
    };

     return (
        <div >
            {movie && (
                <div className={css.container}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width='250'/>
                    <div className={css.list}>
                         <h2 className={css.title}>{movie.title}</h2>
                        <p className={css.score}>User Score: {formatScore(movie.vote_average)}</p>
                        <p className={css.overview}>{movie.overview}</p>
                        <p className={css.genres}><span>Genres</span> {movie.genres.map(genre => genre.name).join(', ')}</p>
                     </div>
                 </div>
             )}
             
           {movie && (
                <div>
                    <h4>Aditional information</h4>
                    <ul>
                        <li>
                            <Link to={`/movies/${movieId}/cast`}>Movie Cast</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
  
)};

export default MovieDetails;



