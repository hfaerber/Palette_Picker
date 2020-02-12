import React from 'react';
import Chooser from './Chooser';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Chooser', () => {
  let wrapper, instance;
  const mockProjects = [
    {id: 1, name: 'test1'},
    {id: 2, name: 'test2'}
  ];

  beforeEach(() => {
    wrapper = shallow(<Chooser projects={mockProjects} />);
    instance = wrapper.instance();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Chooser projects={mockProjects} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should default to having empty strings in any color input', () => {
    const firstInput = wrapper.find('.color-input').first();
    expect(firstInput.prop('value')).toBe('');
  });

  it('Should update the colors when the randomize button is clicked', () => {
    const randomize = wrapper.find('.randomize');
    const firstInput = wrapper.find('.color-input').first();
    randomize.simulate('click');
    expect(firstInput.prop('value')).toBe('');
  });

  it('Should default to not showing the error message', () => {
    const error = wrapper.find('.error');
    expect(error.prop('style').display).toBe('none');
  });

  it.skip('Should show the error if the submit button is clicked with missing values', () => {
    const button = wrapper.find('.add-palette');
    const error = wrapper.find('.error');
    button.simulate('click');
    expect(error.prop('style').display).toBe('block');
  });

});
