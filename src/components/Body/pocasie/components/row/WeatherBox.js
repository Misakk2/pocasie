import React from 'react'

export const WeatherBox = ({ children, ...props }) => {
    return (
        <div className="weather-box" {...props}>
            <div className="weather-actual">
                {children}
            </div>
        </div>
    )
}
