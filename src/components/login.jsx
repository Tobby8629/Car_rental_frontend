import React, { useState } from 'react';
import './componentsCss/login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logUser } from '../Redux/UserSlice';

function Login() {
  const [user, setuser] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectpath = location.state?.path || '/';

  const getTokenFromLocalStorage = async () => new Promise((resolve) => {
    setTimeout(() => {
      const token = localStorage.getItem('token');
      resolve(token);
    }, 2000);
  });

  const submit = async (e) => {
    e.preventDefault();
    if (user.username === '') {
      return;
    }

    try {
      await dispatch(logUser(user));
      const token = await getTokenFromLocalStorage();

      if (token) {
        navigate(redirectpath, { replace: true });
      } else {
        e.target.querySelector('.red').style.display = 'block';
      }
    } catch (error) {
      // Handle any errors from the dispatch or getTokenFromLocalStorage
      console.error(error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={submit}>
        <h2>Sign In</h2>
        <input type="text" id="username" placeholder="username" value={user.username} onChange={(e) => setuser(e.target.value)} />
        <div className="red">username is invalid, please check the username submitted</div>
        <div className="form-btn">
          <button type="submit">Login</button>
        </div>
        <p>
          Don&apos;t have an account?
          <Link to="/signup"> sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
