import { useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import css from './MovieList.module.css'

const MovieList = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();

  useEffect(() => {
const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day',
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDVjZGVkMmMyYjM0NmU3ZDJmYmZjMTQ0NjE5ZmFhOSIsInN1YiI6IjY1ZjVhYzE5MTU2Y2M3MDE3ZTYyMzU1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4TG6hoWqzSjA9IphKF__cmAhTq8GagCWRTJ_7m87oyI',
            },
          }
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };


    fetchTrendingMovies();
  }, []);
    
    return (
        <>
            <ul className={css.list}>
                {trendingMovies.map(movie => (
                    <li key={movie.id} >
                        <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.link}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MovieList;
