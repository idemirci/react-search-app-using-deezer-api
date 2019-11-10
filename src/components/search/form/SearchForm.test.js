import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('Test SearchForm Component', () => {
    const mockArtistList = jest.fn();
    const mockAlbumList = jest.fn();
    const props = {
        fetchArtists: mockArtistList,
        fetchAlbums: mockAlbumList
    };
    let wrapper = shallow(<SearchForm {...props} />);

    it('should render input element', () => {
        expect(wrapper.find('input.search-input').length).toBe(1);
    });

    it('should render button element', () => {
        expect(wrapper.find('button.search-button').length).toBe(1);
    });

    it('handleChange method changes input value', () => {
        wrapper.find('input.search-input').simulate('change', {
            target: { value: 'Change' }
        });

        expect(wrapper.find('input.search-input').props().value).toEqual(
            'Change'
        );
    });

    it('should handle callback function when user submit form ', () => {
        wrapper.find('button.search-button').simulate('click', {
            preventDefault: () => {}
        });
        const callbackCount = mockAlbumList.mock.calls.length;
        expect(callbackCount).toBe(1);
    });
});
