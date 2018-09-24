import { shallow } from 'enzyme';
import Simulator from '../Simulator';
import React from 'react';

describe('Simulator', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Simulator />);
    expect(wrapper).toMatchSnapshot();
  });
  it('evaluate state of class simulator when data passed bu userInput', () => {
    const wrapper = shallow(<Simulator />);
    const instance = wrapper.instance();
    instance.handleAction(1,1,'north');
    expect(wrapper.state().stepX).toBe(1);
    expect(wrapper.state().stepY).toBe(1);
    expect(wrapper.state().stepFace).toBe('north');
  });
});