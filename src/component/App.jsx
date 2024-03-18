import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './Navigation';


const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast'));



const App = () => {
    return (
        <div>
             <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movies' element={<MoviesPage />} />
                <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
                <Route path='/movies/:movieId/cast' element={<MovieCast />} />
                <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    )
};
export default App;
