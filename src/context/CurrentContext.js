import React, { createContext, useState } from 'react';

export const CurrentContext = createContext();

const CurrentContextProvider = (props) => {
    const [currentCity, setCurrentCity] = useState({})
    return (
        <CurrentContext.Provider value={{ currentCity, setCurrentCity }}>
            {props.children}
        </CurrentContext.Provider>
    );
}

export default CurrentContextProvider;