import React from 'react';
import Search from './Search';
import { shallow, mount } from 'enzyme';

describe('Search Component', () => {
    let wrapper = shallow(<Search />);

    it('should render input element', () => {
        expect(wrapper.find('input.search-input').length).toEqual(1);
    });

    it('should render button element', () => {
        expect(wrapper.find('button.search-button').length).toEqual(1);
    });

    it('handleChange method changes input value', () => {
        wrapper.find('input.search-input').simulate('change', {
            target: { value: 'Change' }
        });

        expect(wrapper.find('input.search-input').props().value).toEqual(
            'Change'
        );
    });

    it('handleChange method changes the state', () => {
        wrapper.find('input.search-input').simulate('change', {
            target: { value: 'Change' }
        });

        expect(wrapper.state().searchItem).toBe('Change');
    });
});
