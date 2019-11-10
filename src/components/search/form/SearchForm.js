import React, { useState, useEffect } from 'react';
import './searchForm.scss';

/**
 * Renders SearchForm Component
 * @param {Object} props
 */
const SearchForm = props => {
    const { fetchArtists, fetchAlbums } = props;
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        fetchArtists(searchItem);
    }, [searchItem, fetchArtists]);

    /**
     * handles change on input
     * @param {Object} event
     */
    const handleChange = event => {
        setSearchItem(event.target.value);
    };

    /**
     * handles submit event on form
     * @param {Object} event
     */
    const handleSubmit = event => {
        event.preventDefault();
        fetchAlbums(searchItem);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Search here"
                onChange={handleChange}
                value={searchItem}
            />
            <button
                type="submit"
                className="search-button"
                onClick={handleSubmit}
            >
                Search
            </button>
        </form>
    );
};

export default SearchForm;
