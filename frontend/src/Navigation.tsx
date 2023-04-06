import React from 'react';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements.js';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/podcasts" activeStyle>
            Pocasts
          </NavLink>
          <NavLink to="/movies" activeStyle>
            Movie Collection
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
