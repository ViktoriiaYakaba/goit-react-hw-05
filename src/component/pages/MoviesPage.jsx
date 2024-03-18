import { useState } from 'react';
import { searchMovies } from '../MovieApi';
import { NavLink } from 'react-router-dom';
import css from './MoviesPage.module.css';


const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async () => {
        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div className={css.container}>
            <h2 className={css.title}>Search Movies</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
                className={css.input}
            />
            <button onClick={handleSearch} className={css.btn}>Search</button>

            <ul className={css.list}>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`} className={css.link}>
                            {movie.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesPage;

