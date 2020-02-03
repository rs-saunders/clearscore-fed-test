import React from 'react';
import styles from './IdeaList.module.css';
import IdeaCard from './IdeaCard';
import IdeaForm from './IdeaForm';
import Button from './Button';

const IdeaList = ({title = '', ideas = [], addNewIdea = () => {}, saveIdea = () => {}}) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.list}>
      {ideas.map((idea) => (
        <li
          key={idea.id}
          className={styles.item}
        >
          {idea.editing
            ? <IdeaForm {...idea} saveIdea={saveIdea} />
            : <IdeaCard {...idea} />
          }
        </li>
      ))}
    </ul>
    <Button type="button" onClick={() => addNewIdea(title)}>
      Add new Idea
    </Button>
  </section>
);

export default IdeaList;
