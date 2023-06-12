import React from 'react';
import { Link } from 'react-router-dom';
import './componentsCss/login.css';

function Signup() {
  return (
    <div className="form sign">
      <form>
        <h2>Sign up</h2>
        <input type="text" id="firstname" placeholder="firstname" />
        <input type="text" id="lastname" placeholder="lastname" />
        <input type="text" id="username" placeholder="username" />
        <input type="email" id="email" placeholder="email" />
        <div className="form-btn">
          <button type="submit">Login</button>
        </div>
        <p>
          already have an account?
          <Link to="/login"> sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
