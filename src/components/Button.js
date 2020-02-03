import React from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

const Button = ({ primary, secondary, ...props}) => (
  <button className={cx(
    styles.button, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
  })} {...props} />
);

export default Button;
