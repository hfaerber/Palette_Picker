import React, { useState } from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Login setUser={jest.fn()} />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should invoke the handleSubmit method with the correct argument when there is a change on the username input', () => {
    wrapper.find('#username').simulate('change');
    expect(instance.handleChange).toHaveBeenCalledWith('username');
  });

});
