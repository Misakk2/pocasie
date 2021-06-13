import React from 'react';
import { Bar } from './components/bar/Bar';
import { WeatherBody } from './components/WeatherBody';


export const Weather = () => {
    return (
        <div className="weather">
            <div className="content">
                <Bar />
                <WeatherBody />
            </div>
        </div>
    )
}
