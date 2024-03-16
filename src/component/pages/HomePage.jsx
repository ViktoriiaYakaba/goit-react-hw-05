import MovieList from "../MovieList";
import css from './HomePage.module.css';

function HomePage() {

  return (
    <div className={css.div}>
      <h2>Trending Movies</h2>
       <MovieList />
    </div>
  );
}

export default HomePage;
