import React from 'react';
import Home from '@containers/Home/Home';
import Menu from '@components/Menu/Menu';

import { shallow } from 'enzyme';

describe('Home Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('Has a menu', () => {
    expect(wrapper.contains(<Menu />)).toEqual(true);
  });

  it('Has a title', () => {
    expect(wrapper.contains(<h1>Hello world</h1>)).toEqual(true);
  });
});
