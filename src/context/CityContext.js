import React, { createContext, useState } from 'react';

export const CityContext = createContext();

const CityContextProvider = (props) => {
    const [city, setCity] = useState([
        { nazov: 'Bratislava', lat: '48.1482', lon: "17.1067", country: 'Slovakia', id: '1' },
        { nazov: 'Košice', lat: '48.6667', lon: "21.3333", country: 'Slovakia', id: '2' },
        { nazov: 'Humenne', lat: '48.9371', lon: "21.9163", country: 'Slovakia', id: '3' },
        { nazov: 'Koromľa', lat: '48.7163', lon: "22.2926", country: 'Slovakia', id: '4' },
        { nazov: 'Michalovce', lat: '48.7543', lon: "21.9195", country: 'Slovakia', id: '5' },
        { nazov: 'Sobrance', lat: '48.7445', lon: "22.1814", country: 'Slovakia', id: '6' },
    ])
    return (
        <CityContext.Provider value={{ city }}>
            {props.children}
        </CityContext.Provider>
    );
}

export default CityContextProvider;