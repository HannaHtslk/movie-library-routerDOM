import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/movie-api';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();
      setMovies(results);
    };

    getMovies();
  }, []);
  return (
    <div className={s.mainWrapper}>
      <h1 className={s.title}>Trending Now</h1>
      <div className={s.listWrapper}>
        <ul className={s.list}>
          {movies.map(movie => {
            return (
              <li className={s.item} key={movie.id}>
                <Link className={s.link} to={`/movies/${movie.id.toString()}`}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
