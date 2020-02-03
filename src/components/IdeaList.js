import React from 'react';
import styles from './IdeaList.module.css';
import IdeaCard from './IdeaCard';
import IdeaForm from './IdeaForm';
import Button from './Button';

const IdeaList = ({
  title = '',
  ideas = [],
  addNewIdea = () => {},
  saveIdea = () => {},
  editIdea = () => {},
  deleteIdea = () => {},
}) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.list}>
      {ideas.map((idea) => (
        <li
          key={idea.id}
          className={styles.item}
        >
          {idea.editing || idea.new
            ? <IdeaForm {...idea} saveIdea={saveIdea} />
            : <IdeaCard {...idea} editIdea={editIdea} deleteIdea={deleteIdea} />
          }
        </li>
      ))}
    </ul>
    <Button type="button" primary onClick={() => addNewIdea(title)}>
      Add new Idea
    </Button>
  </section>
);

export default IdeaList;
