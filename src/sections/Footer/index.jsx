import React from 'react';

import styles from './index.module.scss';
import { ReactComponent as Logo } from '../../images/logo-bookmark.svg';
import { ReactComponent as LogoFacebook } from '../../images/icon-facebook.svg';
import { ReactComponent as LogoTwitter } from '../../images/icon-twitter.svg';

function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.wrapper }>
        <div className={ styles['links-wrapper'] }>
          <h2><Logo /></h2>
          <ul>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className={ styles.social }>
          <LogoFacebook />
          <LogoTwitter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
