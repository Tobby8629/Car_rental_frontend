import React from 'react';
import './componentsCss/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="form">
      <form>
        <h2>Sign In</h2>
        <div>
          <input type="text" id="username" placeholder="username" />
        </div>
        <div className="form-btn">
          <button type="submit">Login</button>
        </div>
        <p>
          Don&apos;t have an account?
          <Link to="car"> sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
