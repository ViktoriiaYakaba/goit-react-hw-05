
import{ useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from './MovieApi'; 
import css from './MovieList.module.css';

const MovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchTrendingMovies(); 
      setTrendingMovies(movies);
    };
    fetchMovies();
  }, []);

  return (
    <ul className={css.list}>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

