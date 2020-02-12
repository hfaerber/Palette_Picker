import React from 'react';
import Chooser from './Chooser';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Chooser', () => {
  let wrapper;
  const mockProjects = [
    {id: 1, name: 'test1'},
    {id: 2, name: 'test2'}
  ];

  it('Should match the snapshot', () => {
    wrapper = shallow(<Chooser projects={mockProjects} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Chooser projects={mockProjects} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
