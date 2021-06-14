import React, { createContext, useState, useEffect } from 'react';

export const CityContext = createContext();


const CityContextProvider = (props) => {

    const [city, setCity] = useState([])
    return (
        <CityContext.Provider value={{ city, setCity }}>
            {props.children}
        </CityContext.Provider>
    );
}

export default CityContextProvider;