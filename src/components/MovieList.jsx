import { NavLink } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
    return (
        <ul className={css.list}>
            {movies.map(movie => (
                <li key={movie.id}>
                    <NavLink to={`/movies/${movie.id}`} className={css.link}>
                        {movie.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
