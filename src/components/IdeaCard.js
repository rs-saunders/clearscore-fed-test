import React from 'react';
import styles from './IdeaCard.module.css';

const IdeaCard = ({title, description}) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <hr />
    <p className={styles.description}>{description}</p>
  </div>
);

export default IdeaCard;
