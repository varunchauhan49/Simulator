import { shallow } from 'enzyme';
import UserInput from '../UserInput.js';
import React from 'react';

describe('UserInput', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper).toMatchSnapshot();
  });
});