import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Project } from './Project.js';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


describe('Project', () => {
  let wrapper, mockProjects;

  beforeEach(() => {
    mockProjects = [
        {id: 1, name: 'Project 1'},
        {id: 2, name: 'Project 2'}
      ];
  });

  it('Should match snapshot', () => {
    wrapper = shallow(<Project
      projects={mockProjects}
    />)
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Project
      projects={mockProjects}
    /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should load with initial username of an empty string', () => {
    const { container } = render(<BrowserRouter><Project
      projects={mockProjects}
    /></BrowserRouter>);
    const projectsDisplay = container.querySelector('#project-name-display');
    expect(projectsDisplay.textContent).toBe('');
  });

});
