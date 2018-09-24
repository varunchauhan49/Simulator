import { shallow } from 'enzyme';
import Board from '../Board';
import React from 'react';

describe('Board', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Board posX={-1} posY={-1} rows={8} cols={8} face={''} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('evaluate state of class Board when data passed via prop', () => {
    const wrapper = shallow(<Board posX={-1} posY={-1} rows={8} cols={8} face={''} />);

    expect(wrapper.state().x).toBe(-1);
    expect(wrapper.state().y).toBe(-1);
    expect(wrapper.state().face).toBe('');

    wrapper.setProps({ posX: 1, posY: 1, face: 'north' });
    expect(wrapper.state().x).toBe(1);
    expect(wrapper.state().y).toBe(1);
    expect(wrapper.state().face).toBe('north');
  });
});