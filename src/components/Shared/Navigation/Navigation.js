import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Navigation.css';

const Navigation = () => {
  const handleBurger = () => {
    document.querySelector(".hamburger-menu").classList.toggle("animate");
    document.querySelector(".nav__link").classList.toggle("nav__link__active");
  };
  return (
    <div className="common-bg">
      <div className="">
        <nav className="mx-auto max-width navBar d-flex justify-content-between p-3">
          <Link to="/">
            <h2 className='white'>
              <i>Learning</i> <span style={ { color: "#1dbf73" } }>Point</span>
            </h2>
          </Link>
          <div className="nav__link">

            <NavLink className="mx-3" to="/" exact={ true }>Home</NavLink>


            <NavLink className="mx-3" to="/blog">Blog</NavLink>

            <NavLink className="mx-3" to="/about">About</NavLink>

            <NavLink className="mx-3" to="/all-teacher">All Teacher</NavLink>

            <NavLink className="mx-3" to="/contact-us">Contact Us</NavLink>

            <NavLink className="mx-3" to="/log-in">Log In</NavLink>

            <Link className="navigationRight mx-3" to="/registration-student">
              <Button>Join As Student</Button>
            </Link>

            <Link className="navigationRight mx-3" to="/registration-teacher">
              <Button>Join As Teacher</Button>
            </Link>


          </div>
          <div className="menu-wrapper" onClick={ handleBurger }>
            <div className="hamburger-menu"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;