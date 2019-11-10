import React, { useState } from 'react';
import './albumGrid.scss';
import AlbumDetail from '../detail/AlbumDetail';
import { fetchAlbumDetail } from '../../../service';

/**
 * Shows AlbumGrid Component
 * @param {props} Object
 */
const AlbumGrid = props => {
    const { nextURL, albumList, searchItem } = props;

    // current album state
    const [currentAlbum, setCurrentAlbum] = useState({});

    /**
     * handles album click action when user click one of the album
     * @param {String} albumID
     */
    const handleAlbumClick = albumID => {
        if (currentAlbum && currentAlbum.id !== albumID) {
            fetchAlbumDetail(albumID)
                .then(data => {
                    setCurrentAlbum(data);
                })
                .catch(err => console.log(err));
        }
    };

    // renders AlbumGrid component
    return (
        <div className="album-container">
            <h3 className="search-result-text">
                Search result for {searchItem}
            </h3>

            <h2 className="albums-text">ALBUMS</h2>
            <div className="album-list">
                {albumList.map(album => {
                    return (
                        <div
                            className="album"
                            onClick={() => handleAlbumClick(album.id)}
                            key={album.id}
                        >
                            <img
                                src={album.cover_medium}
                                className="album-image"
                                alt=""
                            />
                            <div className="album-title">{album.title}</div>

                            {currentAlbum && currentAlbum.id === album.id ? (
                                <AlbumDetail album={currentAlbum} />
                            ) : null}
                        </div>
                    );
                })}
            </div>
            {nextURL ? (
                <button
                    className="load-more"
                    onClick={() => props.onLoadMore(nextURL)}
                >
                    Load More
                </button>
            ) : null}
        </div>
    );
};

export default AlbumGrid;
