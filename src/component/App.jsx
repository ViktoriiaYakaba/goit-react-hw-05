import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './Navigation';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));



const App = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
                    <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    )
};
export default App;
