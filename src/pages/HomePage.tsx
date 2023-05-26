import { Component } from 'react';
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import MovieSearch from '../components/MovieSearch'
import MovieGroup from '../components/MovieGroup';

class HomePage extends Component {
  render() {
    return (
      <div className='page-container page-container--homepage'>
        <Header />
        <Welcome />
        <MovieSearch />
        <MovieGroup />
      </div>
    );
  }
}

export default HomePage;