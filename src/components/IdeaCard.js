import React from 'react';
import { format } from 'date-fns';
import styles from './IdeaCard.module.css';

const IdeaCard = ({title, description, createdAt, updatedAt}) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <hr />
    <p className={styles.description}>{description}</p>
    <dl className={styles.metadata}>
      {createdAt &&
        <>
          <dt>Created:</dt>
          <dd className={styles.createdAt}>{format(createdAt, 'dd/MM/yyyy hh:mm aaaa')}</dd>
        </>
      }
      {updatedAt &&
        <>
          <dt>Updated:</dt>
          <dd className={styles.updatedAt}>{format(updatedAt, 'dd/MM/yyyy hh:mm aaaa')}</dd>
        </>
      }
    </dl>
  </div>
);

export default IdeaCard;
