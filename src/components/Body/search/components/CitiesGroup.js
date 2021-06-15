import React from 'react'

export const CitiesGroup = ({ children }) => {
    return (
        <div className="cities">
            <ul className="citiesGroup">
                {children}
            </ul>
        </div>
    )
}
