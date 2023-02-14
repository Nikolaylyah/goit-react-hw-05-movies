import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../../servisec/Api';
import Loader from 'components/Loader/Loader';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieIdCast = async () => {
      try {
        setLoading(true);
        const result = await fetchMovieCast(id);
        setCast(result.cast);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieIdCast();
  }, [id]);

  const element = cast.map(({ id, profile_path, name, character }) => {
    return (
      <li key={id}>
        <img
          src={
            profile_path === null
              ? 'https://stringfixer.com/files/951711496.jpg'
              : `https://image.tmdb.org/t/p/w342/${profile_path}`
          }
          alt={name}
          width="100"
        />
        <p>{name} </p>
        <p>Character: {character} </p>
      </li>
    );
  });

  return (
    <div>
      <ul> {element}</ul>
      {loading && <Loader />}
      {error && <p>Somethink went wrong</p>}
    </div>
  );
}
