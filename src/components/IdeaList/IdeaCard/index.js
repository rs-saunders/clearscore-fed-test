import React from 'react';
import styles from './index.module.css';

const IdeaCard = ({title, description}) => (
  <div className={styles.container}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default IdeaCard;
