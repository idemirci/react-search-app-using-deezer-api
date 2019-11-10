const corsAPI = 'https://cors-anywhere.herokuapp.com/';

/**
 * fetch artists from api
 * @param {String} artistName
 */
export const getArtistList = artistName => {
    return fetch(
        `${corsAPI}https://api.deezer.com/search/artist?q=${artistName}&index=0&limit=10`
    ).then(resp => resp.json());
};

/**
 * fetch albums from api
 * @param {String} artistName
 */
export const getAlbumList = artistName => {
    return fetch(
        `${corsAPI}https://api.deezer.com/search/album?q=${artistName}&index=0&limit=50`
    ).then(resp => resp.json());
};

/**
 * fetch albums from api
 * @param {String} moreDataURL
 */
export const fetchMoreAlbumList = moreDataURL => {
    return fetch(`${corsAPI}${moreDataURL}`).then(resp => resp.json());
};

/**
 * fetch album detail from api
 * @param {String} albumID
 */
export const fetchAlbumDetail = albumID => {
    return fetch(`${corsAPI}https://api.deezer.com/album/${albumID}`).then(
        resp => resp.json()
    );
};
