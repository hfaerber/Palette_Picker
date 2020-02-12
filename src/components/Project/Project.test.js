import React, {useState} from 'react';
import { Project } from './Project.js';
import { shallow } from 'enzyme';

describe('Project', () => {
  let wrapper, mockProjects;

  beforeEach(() => {
    mockProjects = [
        {id: 1, name: 'Project 1'},
        {id: 2, name: 'Project 2'}
      ];
  });

  it('Should match snapshot when no palettes exist for a project', () => {
    wrapper = shallow(<Project
      projects={mockProjects}
    />)
    expect(wrapper).toMatchSnapshot();
  });
  
});
