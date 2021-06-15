import React, { useContext } from 'react';
import { Weather } from './components/Body/pocasie/Weather';
import { Search } from './components/Body/search/Search';
import { Header } from './components/Header/Header';
import { CurrentContext } from './context/CurrentContext';
import { useTransition, animated } from 'react-spring';

function App() {
  const { currentCity } = useContext(CurrentContext);
  const transition = useTransition(currentCity.city == undefined, {
    from: { y: 800, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 800, opacity: 0 },
  });
  const weatherTransition = useTransition(currentCity.city !== undefined, {
    from: { y: 800, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 800, opacity: 0 },
  })

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="pocasie">
        {transition((style, item) =>
          item ? <animated.div style={style}> <Search key="search" /></animated.div> : ""
        )}
        {weatherTransition((style, item) =>
          item ? <animated.div style={style}> <Weather /></animated.div> : ""
        )}

      </div>
    </div>
  );
}

export default App;
