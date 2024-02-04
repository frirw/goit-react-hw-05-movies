import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'api/Api';
import css from './MovieDetails.module.css';

const DEFAULT_IMAGE =
  'https://cdn.iconscout.com/icon/free/png-512/free-image-1438822-1214511.png?f=webp&w=512';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await getFilmById(movieId);
        setFilm(response);
      } catch (error) {
        console.error('Error fetching film:', error);
      }
    };

    fetchFilm();
  }, [movieId]);

  return (
    <>
      <Link to={backLink.current}>Go Back</Link>
      {film && (
        <div className={css.infoWrapper}>
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/original${film.poster_path}`
                : DEFAULT_IMAGE
            }
            alt={film.original_title}
          />
          <div>
            <h2>
              {film.original_title}({parseInt(film.release_date)})
            </h2>
            <p>User Score: {parseInt(film.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h3>Genres</h3>
            <ul className={css.genresList}>
              {film.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
