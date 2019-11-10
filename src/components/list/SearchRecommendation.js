import React from 'react';
import './searchRecommendation.scss';

/**
 * Shows SearchRecommendation Component
 * @param {props} Object
 */
const SearchRecommendation = ({ artistList, handleClick }) => {
    // renders recommendation list while user types
    return (
        <div className="recommendation-wrapper">
            <ul className="recommendation-list">
                <li className="recommendation-results">Search results</li>
                {artistList.map(item => {
                    return (
                        <li
                            key={item.id}
                            className="list-item"
                            onClick={() => handleClick(item.name)}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SearchRecommendation;
