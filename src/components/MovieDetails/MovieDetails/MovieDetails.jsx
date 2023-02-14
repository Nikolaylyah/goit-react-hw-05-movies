import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { fetchMovie } from '../../../servisec/Api';
import Loader from '../../Loader/Loader';
import { AditionalInfo } from '../AditionalInfo/AditionalInfo';
import {
  MovieDetail,
  GoBackButton,
  Genres,
  MovieWrap,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const from = location.state?.from || '/';
  const { id } = useParams();
  const { poster_path, title } = movie;
  let imgPath = !poster_path
    ? 'https://stringfixer.com/files/951711496.jpg'
    : `https://image.tmdb.org/t/p/w300/${poster_path}`;

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchMovie(id);
        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieId();
  }, [id]);

  const goBack = () => {
    console.log(location);
    navigate(from);
  };

  return (
    <div>
      <MovieWrap>
        <div>
          <GoBackButton type="button" onClick={goBack}>
            Go back
          </GoBackButton>
          <img src={imgPath} alt={title} width="300" />
        </div>
        {loading && <Loader />}
        {error && <p>Somethink went wrong</p>}
        {movie && (
          <MovieDetail>
            {movie.release_date && (
              <h2>
                {' '}
                {movie.title} ({movie.release_date.substr(0, 4)})
              </h2>
            )}
            <p>
              <b>User score:</b> {movie.vote_average * 10}%
            </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <Genres>
              {movie.genres &&
                movie.genres.map(genre => (
                  <div key={genre.id}>{genre.name}</div>
                ))}
            </Genres>
          </MovieDetail>
        )}
      </MovieWrap>
      {AditionalInfo(id)}
      <Outlet />
    </div>
  );
}
