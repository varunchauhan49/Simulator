import { shallow } from 'enzyme';
import App from '../App.js';
import React from 'react';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});