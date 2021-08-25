import React from 'react';

import styles from './index.module.scss';
import Button from '../../../UI/Button';

function Browser(props) {
  const { name, version, logo } = props;

  return (
    <div className={ styles.card }>
      <img src={ logo } alt={ name } />
      <h3>{`Add to ${name}`}</h3>
      <span>{`Minimum version ${version}`}</span>
      <Button color="blue">Add &amp; Install Extension</Button>
    </div>
  );
}

export default Browser;
