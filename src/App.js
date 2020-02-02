import React, { Component } from 'react';
import './App.css';
import styles from './App.module.css';
import ColumnLayout from './components/ColumnLayout';
import IdeaList from './components/IdeaList';

const ideas = [
  {
    title: 'Idea 1',
    description: `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
      Mauris in facilisis orci.
      Phasellus euismod, lorem eget rutrum aliquam,
      neque velit rhoncus turpis,
      eget ullamcorper diam metus ac arcu.
      `,
  },
  {
    title: 'Idea 2',
    description: `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
      Mauris in facilisis orci.
      Phasellus euismod, lorem eget rutrum aliquam,
      neque velit rhoncus turpis,
      eget ullamcorper diam metus ac arcu.
      `,
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
            <IdeaList
              title="Good Ideas"
              ideas={ideas}
            />
            <IdeaList
              title="Bad Ideas"
              ideas={ideas}
            />
            <IdeaList
              title="Other Ideas"
              ideas={ideas}
            />
          </ColumnLayout>
        </main>
        <footer className={styles.footer}>
          ClearScore FED test - Richard Saunders (Feb 2020)
        </footer>
      </div>
    );
  }
}
