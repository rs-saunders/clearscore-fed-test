import React from 'react';
import styles from './index.module.css';
import IdeaCard from './IdeaCard';

const IdeaList = ({title = '', ideas = []}) => (
  <section>
    <h2>{title}</h2>
    <ul className={styles.list}>
      {ideas.map((idea) => (
        <li
          key={idea.title}
          className={styles.item}
        >
          <IdeaCard {...idea} />
        </li>
      ))}
    </ul>
  </section>
);

export default IdeaList;