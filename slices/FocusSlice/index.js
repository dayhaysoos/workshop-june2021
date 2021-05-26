import React from 'react';
import { Flex, Box } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import { Link } from 'prismic-reactjs';

const Focus = ({ slice }) => (
  <Flex as='section'>
    <Box>
      <span className='title'>
        <RichText render={slice.primary.title} />
      </span>
      <RichText render={slice.primary.description} />
      <a href={Link.url(slice.primary.categorylink)}>My Link</a>
    </Box>
    <Box>
      <img
        style={{ width: '100%' }}
        src={slice.primary.focusimage.url}
        alt={slice.primary.focusimage.alt}
      />
    </Box>
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </Flex>
);

export default Focus;
