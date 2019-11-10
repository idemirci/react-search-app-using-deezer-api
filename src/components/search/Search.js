import React, { Component } from 'react';
import { debounce } from 'lodash';
import './search.scss';
import SearchForm from './form/SearchForm';
import SearchRecommendation from '../list/SearchRecommendation';
import AlbumGrid from '../albums/grid/AlbumGrid';
import { getArtistList, getAlbumList, fetchMoreAlbumList } from '../../service';

// Shows Search Component
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: '',
            artistList: [],
            showArtistList: false,
            albumList: [],
            nextURL: undefined
        };
    }

    /**
     *  fetch artists while user typing
     *  @param {String} artistName
     */
    fetchArtistList = debounce(artistName => {
        artistName !== ''
            ? getArtistList(artistName)
                  .then(response => {
                      this.setState({
                          artistList: response.data,
                          showArtistList: true
                      });
                  })
                  .catch(err => {
                      console.log(err);
                  })
            : this.setState({ showArtistList: false });
    }, 500);

    /**
     * fetch albums of given artist handles input change
     * @param {String} artistName
     */
    fetchAlbumList = artistName => {
        artistName !== '' &&
            getAlbumList(artistName)
                .then(response => {
                    this.setState({
                        searchItem: artistName,
                        showArtistList: false,
                        albumList: response.data,
                        nextURL: response && response.next
                    });
                })
                .catch(err => {
                    console.log(err);
                });
    };

    /**
     * fetches more data
     * @param {String} moreDataURL
     */
    fetchMoreAlbums = moreDataURL => {
        fetchMoreAlbumList(moreDataURL)
            .then(response => {
                this.setState(prevState => ({
                    albumList: [...prevState.albumList, ...response.data],
                    nextURL: response && response.next
                }));
            })
            .catch(err => {
                console.log(err);
            });
    };

    // renders Search Component
    render() {
        return (
            <div>
                <div className="search-bar">
                    <SearchForm
                        fetchArtists={this.fetchArtistList}
                        fetchAlbums={this.fetchAlbumList}
                    />
                </div>
                {this.state.showArtistList &&
                this.state.artistList &&
                this.state.artistList.length > 0 ? (
                    <SearchRecommendation
                        artistList={this.state.artistList}
                        handleClick={this.fetchAlbumList}
                    />
                ) : null}

                {this.state.albumList && this.state.albumList.length > 0 ? (
                    <AlbumGrid
                        albumList={this.state.albumList}
                        searchItem={this.state.searchItem}
                        nextURL={this.state.nextURL}
                        onLoadMore={this.fetchMoreAlbums}
                    />
                ) : null}
            </div>
        );
    }
}

export default Search;
