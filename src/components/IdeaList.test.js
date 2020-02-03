import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaList from './IdeaList';
import IdeaCard from './IdeaCard';
import IdeaForm from './IdeaForm';

it('renders with no props', () => {
  const wrapper = shallow(<IdeaList />);
  expect(wrapper.find('h2').text()).toEqual('');
  expect(wrapper.find('ul').children()).toHaveLength(0);
});

it('renders with title prop', () => {
  const wrapper = shallow(<IdeaList title="Hello World!" />);
  expect(wrapper.find('h2').text()).toEqual('Hello World!');
});

it('renders with ideas', () => {
  const wrapper = shallow(<IdeaList ideas={[
    {
      id: 1,
      title: 'Idea 1',
      description: `some description 1`,
      createdAt: new Date(2020, 1, 2),
      updatedAt: new Date(2020, 1, 3),
    },
    {
      id: 2,
      title: 'Idea 2',
      description: `some description 2`,
      createdAt: new Date(2019, 2, 2),
    },
  ]} />);

  const ideaCards = wrapper.find(IdeaCard);
  expect(ideaCards).toHaveLength(2);

  const firstIdea = ideaCards.first().dive();
  expect(firstIdea.find('h3').text()).toEqual('Idea 1');
  expect(firstIdea.find('p').text()).toEqual('some description 1');
  expect(firstIdea.find('.metadata').text()).toEqual('Created:02/02/2020 12:00 a.m.Updated:03/02/2020 12:00 a.m.');

  const lastIdea = ideaCards.last().dive();
  expect(lastIdea.find('h3').text()).toEqual('Idea 2');
  expect(lastIdea.find('p').text()).toEqual('some description 2');
  expect(lastIdea.find('.metadata').text()).toEqual('Created:02/03/2019 12:00 a.m.');
});

it('renders with editing and new ideas', () => {
  const wrapper = mount(<IdeaList ideas={[
    {
      id: 1,
      title: 'Idea 1',
      description: `some description 1`,
    },
    {
      id: 2,
      editing: true,
      title: 'Idea 2',
      description: `some description 2`,
    },
    {
      id: 3,
      title: 'Idea 3',
      description: `some description 3`,
    },
    {
      id: 4,
      new: true,
      title: 'Idea 4',
      description: `some description 4`,
    },
  ]} />);

  const ideaCards = wrapper.find(IdeaCard);
  expect(ideaCards).toHaveLength(2);

  const firstIdea = ideaCards.first();
  expect(firstIdea.find('h3').text()).toEqual('Idea 1');
  expect(firstIdea.find('p').text()).toEqual('some description 1');

  const lastIdea = ideaCards.last();
  expect(lastIdea.find('h3').text()).toEqual('Idea 3');
  expect(lastIdea.find('p').text()).toEqual('some description 3');

  const ideaForms = wrapper.find(IdeaForm);
  expect(ideaForms).toHaveLength(2);

  const firstIdeaForm = ideaForms.first();
  expect(firstIdeaForm.find('input[name="title"]').prop('value')).toEqual('Idea 2');
  expect(firstIdeaForm.find('textarea[name="description"]').prop('value')).toEqual('some description 2');

  const lastIdeaForm = ideaForms.last();
  expect(lastIdeaForm.find('input[name="title"]').prop('value')).toEqual('Idea 4');
  expect(lastIdeaForm.find('textarea[name="description"]').prop('value')).toEqual('some description 4');
});
