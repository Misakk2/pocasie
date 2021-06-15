import React, { useState, useEffect, useContext } from 'react';
import { CurrentContext } from '../../../../../context/CurrentContext';
import axios from 'axios';
import arrowUp from '../ikonky/vectorUp.svg';
import arrowDown from '../ikonky/vectorDown.svg';
import { ValueBox } from './ValueBox';

const api = "4c6860d2d483f48435b92e68b18ab461";

const imageUrl = "http://openweathermap.org/img/wn/";
const imageEnd = ".png";

export const DailyWeather = () => {
    const [days, setDays] = useState({});
    const [weather, setWeather] = useState({});
    const { currentCity } = useContext(CurrentContext);
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentCity.lat}&lon=${currentCity.lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${api}`)
            .then(day => {
                setDays(day);
            })
    }, [currentCity]);

    return (
        <>
            {!days?.data?.length ?
                days?.data?.daily.slice(0, 3)?.map(day =>
                    <ValueBox key={day?.id}>
                        <div className="dailyWeather">
                            <img src={imageUrl + day.weather[0].icon + imageEnd} alt={day.weather[0].main} />
                            <p>{new Date(day?.dt * 1000).toLocaleDateString("en-US", { weekday: 'short' })}, {new Date(day?.dt * 1000).toLocaleDateString("en-US", { day: 'numeric' })}</p>
                            <div className="dailyWeatherTemp">
                                <p className="description">{Math.round(day.temp.max)}<img src={arrowUp} alt="arrow" /></p>
                                <p className="description">{Math.round(day.temp.min)}<img src={arrowDown} alt="arrow" /></p>
                            </div>
                        </div>
                    </ValueBox>
                ) : <></>}
        </>
    )
}
