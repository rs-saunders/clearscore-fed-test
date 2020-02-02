import React from 'react';
import styles from './index.module.css';

const ColumnLayout = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default ColumnLayout;
