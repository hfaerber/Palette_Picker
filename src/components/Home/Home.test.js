import React from 'react';
import ReactDOM from 'react-dom';
import { Home, handleProjectSubmit } from './Home.js';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';



describe('Home', () => {
  let wrapper, mockUser, mockSetUser, mockSetProjects;
  const mockProjects = [
    {id: 1, name: 'Project 1'},
    {id: 2, name: 'Project 2'}
  ];
  const mockProps = {projects: mockProjects};

  it('Should match snapshot', () => {
    mockUser = 'Ben';
    mockSetUser = jest.fn();
    mockSetProjects = jest.fn();
    wrapper = shallow(<Home
      user={mockUser}
      setUser={mockSetUser}
      projects={mockProjects}
      setProjects={mockSetProjects}
    />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Home  {...mockProps} />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should load with an initial project text of an empty string', () => {
    const { container } = render(
      <BrowserRouter>
        <Home {...mockProps}/>
      </BrowserRouter>
    );
    const project = container.querySelector('.add-project');
    expect(project.textContent).toBe('');
  });
});
