import { useState, useEffect } from 'react';
import { searchMovies } from '../components/MovieApi';
import { useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';
import MovieList from '../components/MovieList';


const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
        const fetchMovies = async () => {
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

        if (searchParams.has('query')) {
            const queryParam = searchParams.get('query');
            setQuery(queryParam);
            fetchMovies();
        }
    }, [searchParams]);

    const handleSearch = () => {
        setSearchParams({ query });
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

           <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;

