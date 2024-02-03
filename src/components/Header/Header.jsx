import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.headerContainer}>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.link}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
