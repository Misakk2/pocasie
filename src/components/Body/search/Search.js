import React, { useContext, useState } from 'react';
import { CityContext } from '../../../context/CityContext';
import { CurrentContext } from '../../../context/CurrentContext';

export const Search = () => {
    const [search, setSearch] = useState('');
    const { city } = useContext(CityContext);
    const { setCurrentCity } = useContext(CurrentContext);
    return (
        <div className="searchBox">
            <h3>Location</h3>
            <div className="search">
                <input className="searchBar" placeholder="Search city ..." type="text" onChange={e => { setSearch(e.target.value) }} />
                <div className="cities">
                    <ul>
                        {city.filter(mesto => {
                            if (search === "") {
                                return mesto
                            } else if (mesto.nazov.toLowerCase().includes(search.toLowerCase())) {
                                return mesto
                            }
                        }).map(mesto => {
                            return (
                                <li onClick={(e) => setCurrentCity({ city: mesto.nazov, state: mesto.country, lat: mesto.lat, lon: mesto.lon })} key={mesto.id}>
                                    {mesto.nazov}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
