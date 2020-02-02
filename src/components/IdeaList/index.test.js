import React from 'react';
import { shallow } from 'enzyme';
import IdeaList from './';
import IdeaCard from './IdeaCard';

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
      title: 'Idea 1',
      description: `some description 1`,
    },
    {
      title: 'Idea 2',
      description: `some description 2`,
    },
  ]} />);

  const ideaCards = wrapper.find(IdeaCard);
  expect(ideaCards).toHaveLength(2);

  const firstIdea = ideaCards.first().dive();
  expect(firstIdea.find('h3').text()).toEqual('Idea 1');
  expect(firstIdea.find('p').text()).toEqual('some description 1');

  const lastIdea = ideaCards.last().dive();
  expect(lastIdea.find('h3').text()).toEqual('Idea 2');
  expect(lastIdea.find('p').text()).toEqual('some description 2');
});
