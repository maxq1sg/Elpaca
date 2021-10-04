import React, { FC } from 'react';
import styles from './ErrorMessage.module.scss';

const ErrorMessage: FC = ({ children }) => {
  return <div className={styles.message}>{children}</div>;
};

export default ErrorMessage;
