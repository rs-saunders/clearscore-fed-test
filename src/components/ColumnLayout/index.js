import React, { Children } from 'react';
import styles from './index.module.css';

const ColumnLayout = ({children}) => (
  <div className={styles.container}>
    {Children.map(children, (child) => (
      <div className={styles.column}>
        {child}
      </div>
    ))}
  </div>
);

export default ColumnLayout;
