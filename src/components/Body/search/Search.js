import React, { useContext, useState, useEffect } from 'react';
import { CityContext } from '../../../context/CityContext';
import { CurrentContext } from '../../../context/CurrentContext';
import axios from 'axios';

const api = "4c6860d2d483f48435b92e68b18ab461";
const ba = `https://api.openweathermap.org/data/2.5/weather?q=Bratislava,SK&units=metric&appid=${api}`;
const ke = `https://api.openweathermap.org/data/2.5/weather?q=Košice,SK&units=metric&appid=${api}`;
const mi = `https://api.openweathermap.org/data/2.5/weather?q=Michalovce,SK&units=metric&appid=${api}`;
const he = `https://api.openweathermap.org/data/2.5/weather?q=Humenne,SK&units=metric&appid=${api}`;
const so = `https://api.openweathermap.org/data/2.5/weather?q=Sobrance,SK&units=metric&appid=${api}`;
const ko = `https://api.openweathermap.org/data/2.5/weather?q=Koromľa,Slovakia&units=metric&appid=${api}`;

export const Search = () => {
    const [search, setSearch] = useState('');
    const { city, setCity } = useContext(CityContext);
    const { currentCity, setCurrentCity } = useContext(CurrentContext);

    const getCityWeathers = () => {
        axios.all([
            axios.get([ba]),
            axios.get([ke]),
            axios.get([mi]),
            axios.get([so]),
            axios.get([ko]),
            axios.get([he]),
        ]).then(
            axios.spread((...vsetkyData) => {
                setCity(vsetkyData)
                setCity()
                console.log(vsetkyData[1].data.name = "Košice")
            })
        )
    }

    useEffect(() => {
        getCityWeathers()
    }, [])


    return (
        <div className="searchBox">
            <h3>Location</h3>
            <div className="search">
                <input className="searchBar" placeholder="Search city ..." type="text" onChange={e => { setSearch(e.target.value) }} />
                <div className="cities">
                    <ul>
                        {city.filter(mesto => {
                            if (search === "") {
                                console.log()
                                return mesto
                            } else if (mesto?.data.name?.toLowerCase().includes(search.toLowerCase())) {
                                return mesto
                            }
                        }).map(mesto => {
                            return (
                                <li onClick={(e) => setCurrentCity({
                                    city: mesto.data.name,
                                    state: mesto.data.sys.country = "Slovakia",
                                    lat: mesto.data.coord.lat,
                                    lon: mesto.data.coord.lon
                                })} key={mesto.id}
                                >
                                    <p>{mesto.data.name}</p>  <p>{Math.round(mesto.data.main.temp)}°C</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
