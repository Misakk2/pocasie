import React from 'react'
import { Bar } from './Components/Bar/Bar'
import { WeatherBody } from './Components/Weather/WeatherBody'

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
