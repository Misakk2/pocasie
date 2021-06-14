import React, { useContext } from 'react';
import { Weather } from './components/Body/pocasie/Weather';
import { Search } from './components/Body/search/Search';
import { Header } from './components/Header/Header';
import { CurrentContext } from './context/CurrentContext';

function App() {
  const { currentCity } = useContext(CurrentContext);

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="pocasie">
        {currentCity.city ?
          (<Weather />)
          :
          (<Search />)
        }
      </div>
    </div>
  );
}

export default App;
