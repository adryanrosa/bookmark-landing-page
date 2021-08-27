import React from 'react';

import styles from './index.module.scss';
import Button from '../../UI/Button';
import { ReactComponent as ErrorIcon } from '../../images/icon-error.svg';

function Contact() {
  const [isValid, setIsValid] = React.useState(true);
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (EMAIL_REGEX.test(email)) {
      setEmail('');
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <section className={ styles.contact }>
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>

      <form onSubmit={ (event) => handleSubmit(event) }>
        <div className={ isValid ? '' : styles.error }>
          <input
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            type="text"
            placeholder="Enter your email address"
          />
          <ErrorIcon />
          <span>Whoops, make sure its an email</span>
        </div>
        <Button
          type="submit"
          color="red"
        >
          Contact Us
        </Button>
      </form>
    </section>
  );
}

export default Contact;
