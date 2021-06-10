import React from 'react';
import sunny from './013-sunny.png'
import arrow from './Vector.svg'

export const WeatherBody = () => {
    const api = "4c6860d2d483f48435b92e68b18ab461";

    /* api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key} */
    return (
        <div className="weather-box">
            <div className="weather-actual">
                <div className="value">
                    <img src={sunny} alt="sunny" />
                    <p>Sunny</p>
                </div>
                <div className="value">
                    <h3>33</h3><p>°C</p>
                </div>
                <div className="value">
                    <div className="dayTemp"><p>34°C <img src={arrow} alt="arrow" /></p></div>
                    <div className="dayTemp"><p>25°C <img src={arrow} alt="arrow" className="rotate" /></p></div>
                </div>
            </div>
        </div>
    )
}
