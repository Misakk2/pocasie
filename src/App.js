import React from 'react';
import { Weather } from './components/Body/Weather';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="pocasie">
        <Weather />
      </div>
    </div>
  );
}

export default App;
