import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/Api';

const DEFAULT_IMAGE =
  'https://cdn.iconscout.com/icon/free/png-512/free-image-1438822-1214511.png?f=webp&w=512';

const Cast = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getCast(movieId);
        setFilmCast(castData.cast);
      } catch (error) {
        console.error('Failed to fetch cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {filmCast && filmCast.length === 0 ? (
        <div>We don't have any cast for this movie.</div>
      ) : (
        <div>
          <ul>
            {filmCast.map(actor => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                      : DEFAULT_IMAGE
                  }
                  alt={actor.name}
                  width="100"
                  height="100"
                />
                <h4>{actor.original_name}</h4>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
