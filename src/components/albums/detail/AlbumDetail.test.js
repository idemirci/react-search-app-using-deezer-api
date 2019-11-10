import React from 'react';
import AlbumDetail from './AlbumDetail';
import { shallow } from 'enzyme';

describe('Test AlbumDetail Component', () => {
    const mockAlbum = {
        artist: {
            name: 'artist'
        },
        cover_medium: 'cover_medium',
        release_date: '2019-11-09',
        tracks: {
            data: [
                {
                    title: 'track-title-1',
                    duration: '320'
                },
                {
                    title: 'track-title-2',
                    duration: '280'
                }
            ]
        },
        title: 'title'
    };
    const props = {
        album: mockAlbum
    };
    const wrapper = shallow(<AlbumDetail {...props} />);

    it('should display album title', () => {
        expect(wrapper.find('div.album-detail-title').length).toBe(1);
    });

    it('should display head and body rows', () => {
        expect(wrapper.find('tr').length).toBe(3);
    });

    it('should display 5 column in a row', () => {
        const headRow = wrapper.find('tr').at(0);
        const headRowColumns = headRow.find('th').map(column => column.text());
        expect(headRowColumns.length).toBe(5);
    });
});
