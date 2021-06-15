import React from 'react';
import { Bar } from './components/bar/Bar';
import { WeatherBody } from './components/WeatherBody';


export const Weather = ({ ...props }) => {
    return (
        <div className="weather" {...props}>
            <div className="content">
                <Bar />
                <WeatherBody />
            </div>
        </div>
    )
}
