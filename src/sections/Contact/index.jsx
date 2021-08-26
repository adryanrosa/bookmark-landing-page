import React from 'react';

import styles from './index.module.scss';
import Button from '../../UI/Button';

function Contact() {
  return (
    <section className={ styles.contact }>
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>

      <form>
        <input
          type="text"
          placeholder="Enter your email address"
        />
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
