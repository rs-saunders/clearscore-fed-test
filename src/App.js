import React, { Component } from 'react';
import './App.css';
import styles from './App.module.css';
import ColumnLayout from './components/ColumnLayout';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Idea Board</h1>
        </header>
        <main className={styles.main}>
          <ColumnLayout>
            <section>
              <h2>Testing Column 1</h2>
            </section>
            <section>
              <h2>Testing Column 2</h2>
            </section>
            <section>
              <h2>Testing Column 3</h2>
            </section>
          </ColumnLayout>
        </main>
        <footer className={styles.footer}>
          ClearScore FED test - Richard Saunders (Feb 2020)
        </footer>
      </div>
    );
  }
}
