import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section
    style={{
      backgroundImage: `url(${slice.primary.heroImage.url}})`,
      height: '300px',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      marginBottom: '16px',
    }}>
    <span className='title'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}

    <a href={Link.url(slice.primary.heroLink)}>
      <span>{slice.primary.linkLabel}</span>
    </a>
  </section>
);

export default MySlice;
