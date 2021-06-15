import React, { useContext, useState, useEffect } from 'react';
import { CityContext } from '../../../context/CityContext';
import { CurrentContext } from '../../../context/CurrentContext';
import axios from 'axios';
import { SearchBar } from './components/SearchBar';
import { CitiesGroup } from './components/CitiesGroup';
import requests from '../../../api/Api';



export const Search = () => {
    const [search, setSearch] = useState('');
    const { city, setCity } = useContext(CityContext);
    const { currentCity, setCurrentCity } = useContext(CurrentContext);

    const getCityWeathers = () => {
        axios.all([
            axios.get(requests.bratislava),
            axios.get(requests.humenne),
            axios.get(requests.koromla),
            axios.get(requests.kosice),
            axios.get(requests.michalovce),
            axios.get(requests.sobrance),
        ]).then(
            axios.spread((...vsetkyData) => {
                setCity(vsetkyData)

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
                <SearchBar onChange={e => { setSearch(e.target.value) }} />
                <CitiesGroup>
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
                </CitiesGroup>
            </div>
        </div>
    )
}
