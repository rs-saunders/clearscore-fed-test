import React, { Component } from 'react';
import styles from './App.module.css';
import ColumnLayout from './components/ColumnLayout';
import IdeaList from './components/IdeaList';

const ideaLists = [
  'Good Ideas',
  'Bad Ideas',
  'Other Ideas',
];

const ideas = [
  {
    title: 'Idea 1',
    ideaList: 'Good Ideas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
  },
  {
    title: 'Idea 2',
    ideaList: 'Good Ideas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
  },
  {
    title: 'Idea 3',
    ideaList: 'Bad Ideas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
  },
  {
    title: 'Idea 4',
    ideaList: 'Other Ideas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
  },
];

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Idea Board</h1>
        </header>
        <main className={styles.main}>
          <ColumnLayout>
            {ideaLists.map(title => (
              <IdeaList
                key={title}
                title={title}
                ideas={ideas
                  .filter(idea => idea.ideaList === title)
                }
              />
            ))}
          </ColumnLayout>
        </main>
        <footer className={styles.footer}>
          ClearScore FED test - Richard Saunders (Feb 2020)
        </footer>
      </div>
    );
  }
}
