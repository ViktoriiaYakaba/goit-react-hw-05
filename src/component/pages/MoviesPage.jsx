import { useState } from 'react';
import { searchMovies } from '../MovieApi';
import { NavLink } from 'react-router-dom';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const results = await searchMovies(query);
            if (results.length === 0) {
                setError("No movies found for the given query.");
            } else {
                setMovies(results);
                setError(null); 
            }
        } catch (error) {
            console.error('Error searching movies:', error);
            setError("An error occurred while searching for movies.");
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

            {error && <p className={css.error}>{error}</p>}

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

