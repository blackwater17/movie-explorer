import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  
  const loginInfo = (state: {user: { username: string, logged: boolean }}) => state.user.logged;
  const isLogged = useSelector(loginInfo);
  
  return (
    <header>
        <div className='header-logo'>
          <img src={process.env.PUBLIC_URL + '/img/header-logo.png'} alt="header-logo"></img>
        </div>
        <ul>
          <li><Link to={"/"}>HOME</Link></li>
          <li><Link to={"/actors"}>ACTORS</Link></li>
          <li><Link to={"/lists"}>LISTS</Link></li>
          <li><Link to={"/login"}>{isLogged ? "LOGOUT" : "LOGIN"}</Link></li>
        </ul>
    </header>
  );
}

export default Header;