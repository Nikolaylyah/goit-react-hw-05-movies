import { useState, useEffect } from 'react';
import { Link, useSearchParams, Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchQuery } from 'servisec/Api';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [films, setfilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchFilmsQuery = async () => {
      try {
        setLoading(true);
        const result = await fetchQuery(query);
        setfilms(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchFilmsQuery(query);
    }
  }, [query]);

  const onSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {films.length > 0 && (
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
      )}
      {loading && <Loader />}
      {error && <p>Somethink went wrong</p>}
      <Outlet />
    </div>
  );
}
