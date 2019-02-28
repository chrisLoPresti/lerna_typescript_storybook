import { shallow } from 'enzyme';
import * as React from 'react';
import Input from '.';

const wrapper = shallow(<Input text="button" />);

describe('first set', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
