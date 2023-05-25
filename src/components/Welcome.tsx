import React from 'react';
import BASE_URL from '../config/config';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='welcome-msg'> 
        <p>Welcome back <Link to="">Sapphire9041</Link>. Hope you enjoy this site!</p>
    </div>
  );
};

export default Welcome;
