import React from 'react'

export const WeatherValue = ({ children, ...props }) => {
    return (
        <div className="value-weather" {...props}>
            {children}
        </div>
    )
}
