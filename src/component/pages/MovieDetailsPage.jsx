import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../MovieApi";
import { useParams, Link, Outlet } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { MdArrowBack } from "react-icons/md";


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
        return `${score}%`;
    };

     return (
         <div >
            <Link to='/' className={css.btnBack}><MdArrowBack />Go back</Link>
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
                <div className={css.info}>
                    <h4 className={css.titleInfo}>Aditional information</h4>
                    <ul className={css.listInfo}>
                        
                        <li>
                            <Link to={`/movies/${movieId}/cast`} className={css.itemInfo}>Movie Cast</Link>
                         </li>
                         <li>
                             <Link to={`/movies/${movieId}/reviews`} className={css.itemInfo}>Movie Reviews</Link>
                         </li>
                     </ul>
                     <Outlet />
                </div>
            )}
        </div>
  
)};

export default MovieDetails;



