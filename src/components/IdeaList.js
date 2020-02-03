import React from 'react';
import styles from './IdeaList.module.css';
import IdeaCard from './IdeaCard';
import IdeaForm from './IdeaForm';

const IdeaList = ({title = '', ideas = []}) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.list}>
      {ideas.map((idea) => (
        <li
          key={idea.title}
          className={styles.item}
        >
          {idea.editing
            ? <IdeaForm {...idea} />
            : <IdeaCard {...idea} />
          }
        </li>
      ))}
    </ul>
  </section>
);

export default IdeaList;
