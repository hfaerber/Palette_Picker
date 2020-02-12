import React from 'react';
import Loader from './Loader';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Loader', () => {
  let wrapper;

  it('Should match the snapshot', () => {
    wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
