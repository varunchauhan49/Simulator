import { shallow } from 'enzyme';
import Simulator from '../Simulator.js';
import React from 'react';

describe('Simulator', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Simulator />);
    expect(wrapper).toMatchSnapshot();
  });
});