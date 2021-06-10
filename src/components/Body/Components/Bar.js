import React, { useState, useEffect } from 'react';
import location from './location.png'

export const Bar = () => {
    const [date, setDate] = useState(new Date());
    const den = { weekday: 'long' }
    const options = { year: 'numeric', month: 'short', day: 'numeric' }

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    })

    return (
        <div className="bar">
            <div className="datum">
                <p>{date.toLocaleDateString(undefined, den)}, {date.toLocaleDateString(undefined, options)} | {date.toLocaleTimeString()} </p>
            </div>
            <button>Košice, Slovakia <span><img src={location} alt="location" /></span></button>
        </div>
    )
}
