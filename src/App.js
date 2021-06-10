import React from 'react';
import { Weather } from './components/Body/Weather';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
