import React from 'react';
import { Login, handleChange } from './Login.js';
import { shallow } from 'enzyme';

describe('Login', () => {
  let wrapper, instance, mockEvent;

  beforeEach(() => {
    wrapper = shallow(<Login setUser={jest.fn()} />);
    instance = wrapper.instance();
    mockEvent = {target: {
      id: 'username'
    }};
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should invoke the handleSubmit method when there is a change on the username input', () => {
    wrapper.find('#username').simulate('change', mockEvent);
    expect(handleChange).toHaveBeenCalledWith('username');
  });


});
