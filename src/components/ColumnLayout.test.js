import React from 'react';
import { shallow } from 'enzyme';
import ColumnLayout from './ColumnLayout';
import styles from './ColumnLayout.module.css';

it('renders with no children', () => {
  shallow(<ColumnLayout />);
});

it('renders with 1 child', () => {
  const wrapper = shallow(
    <ColumnLayout>
      Hello
    </ColumnLayout>
  );

  const columns = wrapper.find(`.${styles.column}`);
  expect(columns).toHaveLength(1);
  expect(columns.first().text()).toEqual('Hello');
});

it('renders with multiple child', () => {
  const wrapper = shallow(
    <ColumnLayout>
      <div>Hello</div>
      <div>World</div>
    </ColumnLayout>
  );

  const columns = wrapper.find(`.${styles.column}`);
  expect(columns).toHaveLength(2);
  expect(columns.first().text()).toEqual('Hello');
  expect(columns.last().text()).toEqual('World');
});
