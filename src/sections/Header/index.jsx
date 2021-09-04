/* eslint-disable react/jsx-max-depth */
import React from 'react';

import styles from './index.module.scss';
import { ReactComponent as Logo } from '../../images/logo-bookmark--variant.svg';
import { ReactComponent as LogoLight } from '../../images/logo-bookmark--light.svg';
import { ReactComponent as LogoFacebook } from '../../images/icon-facebook.svg';
import { ReactComponent as LogoTwitter } from '../../images/icon-twitter.svg';
import { ReactComponent as IconHamburger } from '../../images/icon-hamburger.svg';
import { ReactComponent as IconClose } from '../../images/icon-close.svg';
import Button from '../../UI/Button';

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className={ `${styles.menu}${open ? ` ${styles['menu--open']}` : ''}` }>
        <nav>
          <div>
            <div className={ styles.menu__header }>
              <LogoLight />
              <button
                type="button"
                className={ styles.menu__close }
                onClick={ () => setOpen(false) }
              >
                <IconClose />
              </button>
            </div>
            <div className={ styles.menu__links }>
              <span>FEATURES</span>
              <span>PRICING</span>
              <span>CONTACT</span>
              <button
                type="button"
              >
                LOGIN
              </button>
            </div>
          </div>

          <div className={ styles.menu__social }>
            <LogoFacebook />
            <LogoTwitter />
          </div>
        </nav>
      </header>

      <header className={ styles.header }>
        <nav>
          <Logo />

          <div className={ styles.header__links }>
            <span>FEATURES</span>
            <span>PRICING</span>
            <span>CONTACT</span>
            <Button color="red">LOGIN</Button>
          </div>

          <button
            type="button"
            className={ styles.header__hamburger }
            onClick={ () => setOpen(true) }
          >
            <IconHamburger />
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
