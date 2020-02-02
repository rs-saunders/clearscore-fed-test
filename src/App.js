import React, { Component } from 'react';
import './App.css';
import styles from './App.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          Idea Board
        </header>
        <main className={styles.main}>
          Testing Testing 1, 2, 3...
        </main>
        <footer className={styles.footer}>
          ClearScore FED test - Richard Saunders (Feb 2020)
        </footer>
      </div>
    );
  }
}
