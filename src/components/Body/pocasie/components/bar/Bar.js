import React, { useState, useEffect, useContext } from 'react';
import { CurrentContext } from '../../../../../context/CurrentContext';
import location from './location.svg'

export const Bar = () => {
    const [date, setDate] = useState(new Date());

    const { currentCity, setCurrentCity } = useContext(CurrentContext);

    const den = { weekday: 'long' }
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const dateBuilder = () => {
        let day = date.toLocaleDateString("en-US", den);
        let datum = date.toLocaleDateString("en-US", options);
        let cas = date.toLocaleTimeString("en-US", { timeStyle: 'short' });

        return `${day}, ${datum} | ${cas}`
    }

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    })



    return (
        <div className="bar">
            <div className="datum">
                <p>{dateBuilder(new Date())}</p>
            </div>
            <a onClick={(e) => setCurrentCity('')} > {currentCity.city}, {currentCity.state} < span > <img src={location} alt /></span></a>
        </div >
    )
}
