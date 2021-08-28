import React, { useState, useRef } from 'react';

import styles from './index.module.scss';
import { ReactComponent as Arrow } from '../../../images/icon-arrow.svg';

function Accordion({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const content = useRef(null);

  return (
    <div className={ styles.accordion }>
      <button
        type="button"
        className={ styles.accordion__toggle }
        onClick={ () => setIsActive(!isActive) }
      >
        {title}
        <Arrow
          className={ `${styles.accordion__icon} ${isActive ? styles.rotate : ''}` }
        />
      </button>
      <div
        ref={ content }
        style={ { maxHeight: isActive ? `${content.current.scrollHeight}px` : '0px' } }
        className={ styles.accordion__content }
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Accordion;
