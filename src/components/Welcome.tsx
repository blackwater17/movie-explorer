import { useSelector } from 'react-redux';

const Welcome = () => {
  const getUsername = (state: {user: { username: string, logged: boolean }}) => state.user.username;
  const username = useSelector(getUsername);
  return (
    <div className='welcome-msg'> 
        <p>Welcome back{username && <span> {username}</span>}. Hope you enjoy the site.</p>
    </div>
  );
};

export default Welcome;