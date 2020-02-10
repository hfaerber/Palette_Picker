import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './Login.js';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Login', () => {
  let wrapper, mockSetUser, mockError;

  it('Should match snapshot', () => {
    mockSetUser = jest.fn();
    mockError = '';
    wrapper = shallow(<Login
      setUser={mockSetUser}
      error={mockError}
    />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Should load with initial username of an empty string', () => {
    const { container } = render(<Login />);
    const username = container.querySelector('#username');
    expect(username.textContent).toBe('');
  });
  it('Should load with an initial password of an empty string', () => {
    const { container } = render(<Login />);
    const password = container.querySelector('#password');
    expect(password.textContent).toBe('');
  });
  it('Should load with an initial error of an empty string', () => {
    const { container } = render(<Login />);
    const error = container.querySelector('.login-error');
    expect(error.textContent).toBe('');
  });
  it('Should add an error message if the button is clicked with no values in one or more inputs', () => {
    const { container } = render(<Login />);
    const button = container.querySelector('.login-submit');
    const error = container.querySelector('.login-error');
    fireEvent.click(button);
    expect(error.textContent).toBe('Both fields are required.');
  });
});
