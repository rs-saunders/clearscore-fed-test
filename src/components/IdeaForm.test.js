import React from 'react';
import { mount } from 'enzyme';
import IdeaForm from './IdeaForm';
import { act } from 'react-dom/test-utils';

it('renders with no props', () => {
  const wrapper = mount(<IdeaForm />);
  expect(wrapper.find('input[name="title"]').prop('value')).toEqual('');
  expect(wrapper.find('textarea[name="description"]').prop('value')).toEqual('');
});

it('renders with title prop', () => {
  const wrapper = mount(<IdeaForm title="some title" />);
  expect(wrapper.find('input[name="title"]').prop('value')).toEqual('some title');
});

it('renders with desscription prop', () => {
  const wrapper = mount(<IdeaForm description="some description" />);
  expect(wrapper.find('textarea[name="description"]').prop('value')).toEqual('some description');
});

it('displays error about required title on blur', async () => {
  const wrapper = mount(<IdeaForm />);
  await act(async () => {
    wrapper.find('input[name="title"]').simulate('blur');
  });
  await act(async () => {
    expect(wrapper.find('.footer').text()).toEqual('A title is required');
  });
});

it('displays error about too long title on blur', async () => {
  const wrapper = mount(<IdeaForm title="this is longer than maximum allowed characters" />);
  await act(async () => {
    wrapper.find('input[name="title"]').simulate('blur');
  });
  await act(async () => {
    expect(wrapper.find('.footer').text()).toEqual('Title must be 25 characters or less');
  });
});

it('displays error about too long description on blur', async () => {
  const wrapper = mount(<IdeaForm
    title="some title"
    description="this is longer than maximum allowed characters,
      this is longer than maximum allowed characters,
      this is longer than maximum allowed characters,
      this is longer than maximum allowed characters"
  />);
  await act(async () => {
    wrapper.find('textarea[name="description"]').simulate('blur');
  });
  await act(async () => {
    expect(wrapper.find('.footer').text()).toEqual('Description must be 140 characters or less');
  });
});
