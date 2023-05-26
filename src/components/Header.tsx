import React from 'react';
import BASE_URL from '../config/config';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className='header-logo'>
          <img src={process.env.PUBLIC_URL + '/img/header-logo.png'} alt="header-logo"></img>
        </div>
        <ul>
          <li><Link to={"/"}>HOME</Link></li>
          <li><Link to={"/actors"}>ACTORS</Link></li>
          <li><Link to={"/lists"}>LISTS</Link></li>
          <li><Link to={"/login"}>LOGOUT</Link></li>
        </ul>
    </header>
  );
}

export default Header;
