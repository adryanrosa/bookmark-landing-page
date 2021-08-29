/* eslint-disable max-len */
import React from 'react';

import styles from './index.module.scss';
import Button from '../../UI/Button';
import BookmarkingIllustration from '../../images/illustration-features-tab-1.svg';
import SearchingIllustration from '../../images/illustration-features-tab-2.svg';
import SharingIllustration from '../../images/illustration-features-tab-3.svg';

const features = [
  {
    title: 'bookmarking',
    button: 'Simple Bookmarking',
    heading: 'Bookmark in one click',
    content: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    image: BookmarkingIllustration,
  },
  {
    title: 'searching',
    button: 'Speedy Searching',
    heading: 'Intelligent search',
    content: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    image: SearchingIllustration,
  },
  {
    title: 'sharing',
    button: 'Easy Sharing',
    heading: 'Share your bookmarks',
    content: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    image: SharingIllustration,
  },
];

function Features() {
  const [feature, setFeature] = React.useState('bookmarking');

  return (
    <section className={ styles.features }>
      <div className={ styles.wrapper }>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>

        <ul>
          {features.map(({ title, button }) => (
            <li key={ title }>
              <button
                onClick={ () => setFeature(title) }
                className={ feature === title ? styles['btn-active'] : '' }
                type="button"
              >
                {button}
              </button>
            </li>
          ))}
        </ul>

        <div className={ `${styles.carousel} ${styles[`carousel--${feature}`]}` }>
          {features.map(({ title, heading, content, image }) => (
            <div
              key={ title }
              className={ `${styles.feature}${feature === title ? ` ${styles['feature--active']}` : ''}` }
            >
              <div className={ styles['image-container'] }>
                <img src={ image } alt={ title } />
              </div>
              <div>
                <h3>{heading}</h3>
                <p>{content}</p>
                <Button color="blue">More Info</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
