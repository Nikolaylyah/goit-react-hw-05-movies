import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'servisec/Api';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [films, setfilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieTrending = async () => {
      try {
        setLoading(true);
        const result = await fetchTrending();
        setfilms(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieTrending();
  }, []);

  return (
    <div>
      <h1> Trending movies</h1>
      <ul>
        {films.map(({ id, title, name }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
              }}
            >
              {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
      {loading && <Loader />}
      {error && <p>Somethink went wrong</p>}
    </div>
  );
}
