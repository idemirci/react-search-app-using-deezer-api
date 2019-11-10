import React from 'react';
import AlbumGrid from './AlbumGrid';
import { shallow } from 'enzyme';

describe('Test AlbumGrid Component', () => {
    const mockAlbum = [
        {
            id: 123,
            title: 'title123',
            cover_medium: 'title123'
        },
        {
            id: 234,
            title: 'title234',
            cover_medium: 'title234'
        },
        {
            id: 345,
            title: 'title345',
            cover_medium: 'title345'
        }
    ];
    const searchItem = 'AlbumList';

    const props = {
        albumList: mockAlbum,
        searchItem
    };
    const wrapper = shallow(<AlbumGrid {...props} />);

    it('should render album grid', () => {
        expect(wrapper.find('img.album-image').length).toEqual(3);
    });

    it('should display ALBUMS text', () => {
        expect(wrapper.find('h2.albums-text').text()).toEqual('ALBUMS');
    });

    it('should display search result text', () => {
        expect(wrapper.find('h3.search-result-text').text()).toEqual(
            'Search result for AlbumList'
        );
    });

    it('should not display load more button', () => {
        expect(wrapper.find('button.load-more').length).toEqual(0);
    });
});
