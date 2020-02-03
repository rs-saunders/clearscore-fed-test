import React from 'react';
import { format } from 'date-fns';
import styles from './IdeaCard.module.css';
import Button from './Button';

const IdeaCard = ({
  id,
  title,
  description,
  createdAt,
  updatedAt,
  editIdea = () => {},
  deleteIdea = () => {},
}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.lastCol}>
        <Button
          type="button"
          onClick={() => editIdea(id)}
        >
          Edit
        </Button>
        <Button
          type="button"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this task?')) {
              deleteIdea(id)
            }
          }}
        >
          Delete
        </Button>
      </div>
    </div>
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
