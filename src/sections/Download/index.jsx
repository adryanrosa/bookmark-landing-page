import React from 'react';

import styles from './index.module.scss';
import Browser from './Browser';

import ChromeLogo from '../../images/logo-chrome.svg';
import FirefoxLogo from '../../images/logo-firefox.svg';
import OperaLogo from '../../images/logo-opera.svg';

const browsers = [
  {
    name: 'Chrome',
    version: 62,
    logo: ChromeLogo,
  },
  {
    name: 'Firefox',
    version: 55,
    logo: FirefoxLogo,
  },
  {
    name: 'Opera',
    version: 46,
    logo: OperaLogo,
  },
];

function Download() {
  return (
    <section className={ styles.download }>
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className={ styles['cards-grid'] }>
        {
          browsers.map(({ name, version, logo }) => (
            <Browser key={ name } name={ name } version={ version } logo={ logo } />
          ))
        }
      </div>
    </section>
  );
}

export default Download;
