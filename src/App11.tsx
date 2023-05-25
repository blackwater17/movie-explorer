import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {first: "name", last: "last_name"},
    {first: "name22", last: "last_name22"},
    {first: "name333", last: "last_name33"},
  ]

  return (
    <div className="App">
      <Greet name="Jack" messageCount={22} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
    </div>
  );
}

export default App;
