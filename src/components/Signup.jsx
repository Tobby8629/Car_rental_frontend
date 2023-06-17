import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './componentsCss/login.css';
import { useDispatch } from 'react-redux';
import { postUser } from '../Redux/UserSlice';

function Signup() {
  const [user, setuser] = useState({ username: '', email: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getmessage = async () => new Promise((resolve) => {
    setTimeout(() => {
      const token = localStorage.getItem('success');
      resolve(token);
    }, 2000);
  });

  const submit = async (e) => {
    e.preventDefault();
    if (user.email === '' || user.username === '') {
      return;
    }

    try {
      await dispatch(postUser({ username: user.username }));
      const token = await getmessage();

      if (token) {
        navigate('/login', { replace: true });
        localStorage.removeItem('success');
      } else {
        e.target.querySelector('.red').style.display = 'block';
      }
    } catch (error) {
      // Handle any errors from the dispatch or getTokenFromLocalStorage
      // console.error(error);
    }
    // dispatch(postUser({ username: user.username }));
    // const token = await getmessage();
    // if (token) {
    //   navigate('/login', { replace: true });
    //   localStorage.removeItem('success');
    // } else {
    //   e.target.querySelector('.red').style.display = 'block';
    // }
  };

  return (
    <div className="form sign">
      <form onSubmit={submit}>
        <h2>Sign up</h2>
        <input type="text" id="username" value={user.username} placeholder="username" onChange={(e) => setuser({ ...user, username: e.target.value })} />
        <input type="email" id="email" value={user.email} placeholder="email" onChange={(e) => setuser({ ...user, email: e.target.value })} />
        <div className="red">username has been taken</div>
        <div className="form-btn">
          <button type="submit">Sign up</button>
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
