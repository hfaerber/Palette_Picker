import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  it('Should match the snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

});
