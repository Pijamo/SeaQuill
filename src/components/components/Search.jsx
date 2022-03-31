import React from 'react'
import { Link } from 'react-router-dom';

const Search = () => {

    return (
        <div className="ltn__search-widget mb-30">
            <form action="#">
                <input type="text" name="search" placeholder="Search your keyword..." />
                <button type="submit"><i className="fas fa-search" /></button>
            </form>
        </div>
    )

}

export default Search