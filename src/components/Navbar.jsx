import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './componentsCss/navbar.css';

function Navbar() {
  const [tray, settray] = useState(true);

  return (
    <>
      <div className="mobile bars">
        <span role="button" onClick={() => settray(false)} onKeyDown={() => settray(false)} tabIndex={0}>
          <i className="fa-solid fa-bars" />
        </span>
      </div>
      <div id="navbar" className={tray ? 'block' : 'show'} role="button" onClick={() => settray(true)} onKeyDown={() => settray(false)} tabIndex={0}>
        <div className="top">
          <h2>CAR RENT</h2>
          <ul>
            <li>
              <Link to="/">Car</Link>
            </li>
            <li>
              <Link to="reserve">Reserve</Link>
            </li>
            <li>
              <Link to="myreserve">My Reservations</Link>
            </li>
            <li>
              <Link to="add">Add Car</Link>
            </li>
            <li>
              <Link to="delete">Delete Car</Link>
            </li>
            <li>
              <Link to="login">sign in</Link>
            </li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li><i className="fa-brands fa-twitter" /></li>
            <li><i className="fa-brands fa-facebook-f" /></li>
            <li><i className="fa-brands fa-pinterest-p" /></li>
            <li><i className="fa-brands fa-google-plus-g" /></li>
          </ul>
        </div>
        <div className="mobile cancel" role="button" onClick={() => settray(true)} onKeyDown={() => settray(true)} tabIndex={0}>
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
