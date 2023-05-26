import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/user'

const LoginPage: React.FC = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username.length < 4 || password.length < 4) {
      alert("Password and username must be at least 4 characters long.")
      return false
    }
    dispatch(setUser(username, true));
    navigate('/'); 
  };

  return (
    <div className="login-page-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className='btn-container'>
          <button className='submit' type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;