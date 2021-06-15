import React, { useState, useEffect, useContext } from 'react';
import arrowUp from './ikonky/vectorUp.svg';
import arrowDown from './ikonky/vectorDown.svg';
import humidity from './ikonky/humidity.svg';
import barometer from './ikonky/barometer.svg';
import wind from './ikonky/wind.svg';
import sunrise from './ikonky/sunrise.svg';
import sunset from './ikonky/sunset.svg';
import daytime from './ikonky/sand-clock.svg';
import axios from 'axios';
import { CurrentContext } from '../../../../context/CurrentContext';
import { WeatherBox } from './row/WeatherBox';
import { ValueBox } from './row/ValueBox';
import { WeatherValue } from './row/WeatherValue';
import { DailyWeather } from './row/DailyWeather';


const api = "4c6860d2d483f48435b92e68b18ab461";

export const WeatherBody = () => {
    const [weather, setWeather] = useState({});
    const { currentCity } = useContext(CurrentContext);
    const options = { day: 'numeric' }

    useEffect(() => {
        async function getWeather() {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity.city},${currentCity.state}&units=metric&appid=${api}`)
            setWeather(res)
        }
        getWeather()
    }, [currentCity]);



    const iconUrl = `http://openweathermap.org/img/wn/${weather?.data?.weather[0].icon}.png`;
    const imageUrl = "http://openweathermap.org/img/wn/";
    const imageEnd = ".png";

    return (
        <WeatherBox >
            <ValueBox>
                <WeatherValue key={weather?.data?.weather[0].id}>
                    <img src={iconUrl} alt={weather?.data?.weather[0].icon} />
                    <p className="clouds">{weather?.data?.weather[0]?.main}</p>
                </WeatherValue>
            </ValueBox>
            <ValueBox>
                <div className="teplota">
                    <h3 className="temp">{Math.round(weather?.data?.main.temp)}</h3><p>°C</p>
                </div>
            </ValueBox>
            <ValueBox>
                <div className="dayTemp"><p>{Math.round(weather?.data?.main.temp_max)}°C <img src={arrowUp} alt="arrow" /></p></div>
                <div className="dayTemp"><p>{Math.round(weather?.data?.main.temp_min)}°C <img src={arrowDown} alt="arrow" /></p></div>
            </ValueBox>
            <ValueBox>
                <WeatherValue key={weather?.data?.weather[0].id}>
                    <img src={humidity} alt="humidity" />
                    <p>{weather?.data?.main.humidity}%</p>
                    <p className="description">Humidity</p>
                </WeatherValue>
            </ValueBox>
            <ValueBox>
                <WeatherValue key={weather?.data?.weather[0].id}>
                    <img src={barometer} alt="barometer" />
                    <p>{weather?.data?.main.pressure}mBar</p>
                    <p className="description">Pressure</p>
                </WeatherValue>
            </ValueBox>
            <ValueBox>
                <WeatherValue key={weather?.data?.weather[0].id}>
                    <img src={wind} alt="wind" />
                    <p>{weather?.data?.wind?.speed}km/h</p>
                    <p className="description">Wind</p>
                </WeatherValue>
            </ValueBox>
            <ValueBox>
                <WeatherValue key={weather?.data?.weather[0].id}>
                    <img src={sunrise} alt="sunrise" />
                    <p>{new Date(weather?.data?.sys?.sunrise * 1000).toLocaleTimeString(undefined, { timeStyle: 'short' })}</p>
                    <p className="description">Sunrise</p>
                </WeatherValue>
            </ValueBox>
            <ValueBox>
                <WeatherValue key={weather?.data?.weather[0].id}>
                    <img src={sunset} alt="sunset" />
                    <p>{new Date(weather?.data?.sys?.sunset * 1000).toLocaleTimeString(undefined, { timeStyle: 'short' })}</p>
                    <p className="description">Sunset</p>
                </WeatherValue>
            </ValueBox>
            <ValueBox>
                <WeatherValue key={weather?.data?.weather[0].id}>
                    <img src={daytime} alt="daytime" />
                    <p>{new Date(weather?.data?.dt * 1000).toLocaleTimeString(undefined, { timeStyle: 'short' })}</p>
                    <p className="description">Daytime</p>
                </WeatherValue>
            </ValueBox>
            <DailyWeather />
        </WeatherBox>
    )
}
