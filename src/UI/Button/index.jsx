import React from 'react';

import styles from './index.module.scss';

function Button({ children, submit, handleClick, color }) {
  return (
    <button
      className={ `${styles.button} ${styles[color]}` }
      type={ submit ? 'submit' : 'button' }
      onClick={ handleClick }
    >
      {children}
    </button>
  );
}

export default Button;
