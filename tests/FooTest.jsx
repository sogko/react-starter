import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Foo from '../src/Foo';

test('<Foo /> adds two numbers', (t) => {
  const wrapper = shallow(<Foo a={2} b={2} />);
  t.equal(wrapper.text(), '4');
  t.end();
});
