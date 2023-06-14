import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './componentsCss/login.css';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from './Redux/UserSlice';

function Signup() {
  const [user,setuser] = useState({username: "", email:""})
  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault();
    if(user.email === '' || user.username === '') {
      return
    }
    dispatch(postUser({username: user.username}))
  }

  return (
    <div className="form sign">
      <form onSubmit={submit}>
        <h2>Sign up</h2>
        <input type="text" id="username" value={user.username} placeholder="username" onChange={(e)=>setuser({...user, username:e.target.value})} />
        <input type="email" id="email" value={user.email} placeholder="email" onChange={(e)=>setuser({...user, email: e.target.value})} />
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
