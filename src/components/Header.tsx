import React from 'react';

function Header() {
  return (
    <header>

        <div className='header-logo'>
          <img src="/img/header-logo.png" alt="header-logo"></img>
        </div>

        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/movie-explorer/movies">MOVIES</a></li>
          <li><a href="/actors">ACTORS</a></li>
          <li><a href="/lists">LISTS</a></li>
        </ul>
    </header>
  );
}

export default Header;
