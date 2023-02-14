import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Review = lazy(() => import('./MovieDetails/Review/Review'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const MovieDetails = lazy(() =>
  import('./MovieDetails/MovieDetails/MovieDetails')
);
const NotFound = lazy(() => import('../pages/NotFoud'));

export default function UserRout() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
