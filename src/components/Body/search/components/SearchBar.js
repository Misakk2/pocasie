import React from 'react'

export const SearchBar = ({ ...props }) => {
    return (
        <input className="searchBar" placeholder="Search city ..." type="text" {...props} />
    )
}
