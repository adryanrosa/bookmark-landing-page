import React from 'react';

import styles from './index.module.scss';
import Illustration from '../../images/illustration-hero.svg';

function Hero() {
  return (
    <section className={ styles.hero }>
      <div className={ styles.wrapper }>
        <div className={ styles['image-container'] }>
          <img src={ Illustration } alt="Illustration" />
        </div>
        <div className={ styles['text-container'] }>
          <h2>A Simple Bookmark Manager</h2>
          <p>
            A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
