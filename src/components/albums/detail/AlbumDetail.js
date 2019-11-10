import React from 'react';
import './albumDetail.scss';

/**
 * Show Album Detail Component
 * @param {props} Object
 */
const AlbumDetail = props => {
    const { artist, cover_medium, release_date, tracks, title } = props.album;
    return (
        <div className="album-detail-container">
            <div className="album-detail-image">
                <img alt="" src={cover_medium}></img>
            </div>
            <div className="album-detail-texts">
                <div className="album-detail-title">{title}</div>

                <div className="album-detail-tracks-container">
                    <table>
                        <thead>
                            <tr>
                                <th className="index">#</th>
                                <th className="title">Title</th>
                                <th className="artist">Artist</th>
                                <th>Time</th>
                                <th>Released</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tracks.data.map((item, index) => {
                                return (
                                    // <div className="album-detail-tracks">
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{artist && artist.name}</td>
                                        <td>
                                            {new Date(item.duration * 1000)
                                                .toISOString()
                                                .substr(15, 4)}
                                        </td>
                                        <td className="release-date">
                                            {new Date(
                                                release_date
                                            ).getFullYear()}
                                        </td>
                                    </tr>
                                    // </div>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AlbumDetail;
