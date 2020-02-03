import React, { useState } from 'react';
import { subDays } from 'date-fns';
import styles from './App.module.css';
import ColumnLayout from './components/ColumnLayout';
import IdeaList from './components/IdeaList';
import { randomId } from './util';

const App = () => {

  const [ ideaLists ] = useState([
    'Good Ideas',
    'Bad Ideas',
    'Other Ideas',
  ]);

  const [ ideas, setIdeas ] = useState([
    {
      id: randomId(),
      title: 'Idea 1',
      ideaList: 'Good Ideas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
      createdAt: subDays(Date.now(), 5),
    },
    {
      id: randomId(),
      title: 'Idea 2',
      ideaList: 'Good Ideas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
      createdAt: subDays(Date.now(), 2),
    },
    {
      id: randomId(),
      title: 'Idea 3',
      ideaList: 'Bad Ideas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
      createdAt: subDays(Date.now(), 1),
    },
    {
      id: randomId(),
      title: 'Idea 4',
      ideaList: 'Other Ideas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in facilisis orci. Phasellus euismod, lorem eget rutrum aliquam, neque velit rhoncus',
      createdAt: subDays(Date.now(), 1),
    },
  ]);

  const addNewIdea = (ideaList) => {
    setIdeas([
      ...ideas,
      {
        id: randomId(),
        ideaList,
        new: true,
        title: '',
        description: '',
      }
    ]);
  }

  const editIdea = (id) => {
    const index = ideas.findIndex(idea => idea.id === id);
    const ideaToEdit = ideas.find(idea => idea.id === id);
    setIdeas([
      ...ideas.slice(0, index),
      { ...ideaToEdit, editing: true },
      ...ideas.slice(index+1, ideas.length),
    ]);
  }

  const deleteIdea = (id) => {
    const index = ideas.findIndex(idea => idea.id === id);
    setIdeas([
      ...ideas.slice(0, index),
      ...ideas.slice(index+1, ideas.length),
    ]);
  }

  const saveIdea = (ideaToSave) => {
    const index = ideas.findIndex(idea => idea.id === ideaToSave.id);
    setIdeas([
      ...ideas.slice(0, index),
      ideaToSave,
      ...ideas.slice(index+1, ideas.length),
    ]);
  }

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
              addNewIdea={addNewIdea}
              saveIdea={saveIdea}
              editIdea={editIdea}
              deleteIdea={deleteIdea}
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
};

export default App;
