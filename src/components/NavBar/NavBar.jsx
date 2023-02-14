import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavElement } from './NavBar.styled';
import Loader from 'components/Loader/Loader';

export const NavBar = () => {
  return (
    <div>
      <header>
        <Nav>
          <NavElement to="/" end>
            Home
          </NavElement>
          <NavElement to="/movies">Movies</NavElement>
        </Nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
