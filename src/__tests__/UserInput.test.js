import { shallow } from 'enzyme';
import UserInput from '../UserInput';
import React from 'react';

describe('UserInput', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper).toMatchSnapshot();
  });
  it('evaluate class with user input place 1,1,north', () => {
    const mockFun = jest.fn();
    const wrapper = shallow(<UserInput action={mockFun} />)
    const input = wrapper.find('#commandInput').first();
    expect(input.length).toBe(1);
    input.value = 'place 1,1,north';
    const firstButton = wrapper.find('#execute');
    input.simulate('change', { target: { value: 'place 1,1,north'}});
    firstButton.simulate('click');
    expect(wrapper.state().commandInput).toBe('place 1,1,north');
    expect(wrapper.state().x).toBe(1);
    expect(wrapper.state().y).toBe(1);
    expect(wrapper.state().face).toBe('north');
  });
  it('when robot being placed where it might fall(X axis)', () => {
    const mockFun = jest.fn();
    const wrapper = shallow(<UserInput action={mockFun} />)
    const input = wrapper.find('#commandInput').first();
    expect(input.length).toBe(1);
    input.value = 'place 8,7,north';
    const firstButton = wrapper.find('#execute');
    input.simulate('change', { target: { value: 'place 8,7,north'}});
    firstButton.simulate('click');
    expect(wrapper.state().commandInput).toBe('place 8,7,north');
    expect(wrapper.state().x).toBe(-1);
    expect(wrapper.state().y).toBe(-1);
    expect(wrapper.state().face).toBe('');
    expect(wrapper.state().modal).toBe(true);
    expect(wrapper.state().response).toBe("Value of co-ordinate X is incorrect, Robot will fall from board.");
  });
  it('when robot being placed where it might fall(Y axis)', () => {
    const mockFun = jest.fn();
    const wrapper = shallow(<UserInput action={mockFun} />)
    const input = wrapper.find('#commandInput').first();
    expect(input.length).toBe(1);
    input.value = 'place 7,8,north';
    const firstButton = wrapper.find('#execute');
    input.simulate('change', { target: { value: 'place 7,8,north'}});
    firstButton.simulate('click');
    expect(wrapper.state().commandInput).toBe('place 7,8,north');
    expect(wrapper.state().x).toBe(-1);
    expect(wrapper.state().y).toBe(-1);
    expect(wrapper.state().face).toBe('');
    expect(wrapper.state().modal).toBe(true);
    expect(wrapper.state().response).toBe("Value of co-ordinate Y is incorrect, Robot will fall from board");
  });
  it('evaluate class with user input command place 5,4,south and move', () => {
    const mockFun = jest.fn();
    const wrapper = shallow(<UserInput action={mockFun} />)
    const input = wrapper.find('#commandInput').first();
    expect(input.length).toBe(1);
    input.value = 'place 5,4,south';
    const firstButton = wrapper.find('#execute');
    input.simulate('change', { target: { value: 'place 5,4,south'}});
    firstButton.simulate('click');
    expect(wrapper.state().commandInput).toBe('place 5,4,south');
    expect(wrapper.state().x).toBe(5);
    expect(wrapper.state().y).toBe(4);
    expect(wrapper.state().face).toBe('south');

    input.simulate('change', { target: { value: 'move'}});
    firstButton.simulate('click');

    expect(wrapper.state().x).toBe(5);
    expect(wrapper.state().y).toBe(5);
  });
  it('user input commands PLACE(place 3,3,south), LEFT and MOVE', () => {
    const mockFun = jest.fn();
    const wrapper = shallow(<UserInput action={mockFun} />)
    const input = wrapper.find('#commandInput').first();
    expect(input.length).toBe(1);
    input.value = 'place 3,3,south';
    const firstButton = wrapper.find('#execute');
    input.simulate('change', { target: { value: 'place 3,3,south'}});
    firstButton.simulate('click');
    expect(wrapper.state().commandInput).toBe('place 3,3,south');
    expect(wrapper.state().face).toBe('south');

    input.simulate('change', { target: { value: 'left'}});
    firstButton.simulate('click');

    input.simulate('change', { target: { value: 'move'}});
    firstButton.simulate('click');

    expect(wrapper.state().x).toBe(4);
    expect(wrapper.state().y).toBe(3);
  });
  it('evaluate class with user input command place 5,4,south and keep move untill it might fall', () => {
    const mockFun = jest.fn();
    const wrapper = shallow(<UserInput action={mockFun} />)
    const input = wrapper.find('#commandInput').first();
    expect(input.length).toBe(1);
    input.value = 'place 5,4,south';
    const firstButton = wrapper.find('#execute');
    input.simulate('change', { target: { value: 'place 5,4,south'}});
    firstButton.simulate('click');
    expect(wrapper.state().commandInput).toBe('place 5,4,south');
    expect(wrapper.state().x).toBe(5);
    expect(wrapper.state().y).toBe(4);
    expect(wrapper.state().face).toBe('south');

    input.simulate('change', { target: { value: 'move'}});
    firstButton.simulate('click');

    expect(wrapper.state().x).toBe(5);
    expect(wrapper.state().y).toBe(5);

    input.simulate('change', { target: { value: 'move'}});
    firstButton.simulate('click');
    input.simulate('change', { target: { value: 'move'}});
    firstButton.simulate('click');
    input.simulate('change', { target: { value: 'move'}});
    firstButton.simulate('click');

    expect(wrapper.state().x).toBe(5);
    expect(wrapper.state().y).toBe(7);
    expect(wrapper.state().modal).toBe(true);
    expect(wrapper.state().response).toBe("Direction of robot incorrect and robot can fall");
  });
});