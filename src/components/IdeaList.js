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
  sortIdea = () => {},
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
    <div className={styles.footer}>
      <div>
        <Button type="button" primary onClick={() => addNewIdea(title)}>
          Add new Idea
        </Button>
      </div>
      <div className={styles.lastCol}>
        <Button type="button" secondary onClick={() => sortIdea(title, 'title')}>
          Sort by Title
        </Button>
        <Button type="button" secondary onClick={() => sortIdea(title, 'createdAt')}>
          Sort by Date
        </Button>
      </div>
    </div>
  </section>
);

export default IdeaList;
