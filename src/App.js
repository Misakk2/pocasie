import React, { useContext } from 'react';
import { Weather } from './components/Body/pocasie/Weather';
import { Search } from './components/Body/search/Search';
import { Header } from './components/Header/Header';
import { CurrentContext } from './context/CurrentContext';
import { useTransition, animated } from 'react-spring';

function App() {
  const { currentCity } = useContext(CurrentContext);
  const transition = useTransition(currentCity.city == undefined, {
    from: { y: 800, Zindex: 1000, display: 'none' },
    enter: { y: 0, Zindex: 1000, display: 'block' },
    leave: { y: 800, Zindex: 1000, display: 'none' },
  });


  return (
    <div className="container">
      <div className="header">
        <Header key="Header" />
      </div>
      <div className="pocasie">
        {transition((style, item) =>
          item ? <animated.div style={style}> <Search key="search" /></animated.div> : ''
        )}
        {currentCity.city !== undefined ?
          <Weather key="Weather" /> : <Weather key="Weather" style={{ display: 'none' }} />
        }
      </div>
    </div>
  );
}

export default App;
