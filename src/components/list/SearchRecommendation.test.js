import React from 'react';
import SearchRecommendation from './SearchRecommendation';
import { shallow } from 'enzyme';

describe('Test SearchRecommendation Component', () => {
    let mockData = [
        {
            id: 123,
            name: 'name123'
        },
        {
            id: 234,
            name: 'name234'
        },
        {
            id: 345,
            name: 'name345'
        }
    ];

    let wrapper = shallow(
        <SearchRecommendation artistList={mockData} handleClick={() => {}} />
    );

    it('should render recommendation item ', () => {
        expect(wrapper.find('li').length).toEqual(4);
    });

    it('should change recommendation items when it takes new artistList', () => {
        const newArtistList = [
            {
                id: 135,
                name: 'name135'
            }
        ];
        wrapper.setProps({ artistList: newArtistList });

        expect(wrapper.find('li').length).toEqual(2);
    });

    it('should call handleClick on click ', () => {
        const mockHandleClick = jest.fn();
        wrapper.setProps({ handleClick: mockHandleClick });
        wrapper.find('li.list-item').simulate('click');
        expect(mockHandleClick).toHaveBeenCalled();
    });
});
