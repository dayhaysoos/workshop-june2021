import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui';

const MySlice = ({ slice }) => (
  <section style={{ marginBottom: '16px' }}>
    <span className='title'>
      <RichText render={slice.primary.description} />
    </span>
    <Flex>
      {slice?.items?.map((item, i) => {
        return (
          <Box>
            <img
              width='100%'
              src={item['product-image'].url}
              alt={item['product-image'].alt}
              key={`img-${i}`}
              style={{ marginBottom: '16px' }}
            />
            <Flex sx={{ justifyContent: 'space-between', padding: '8px' }}>
              <span>{item.description}</span>
              <span key={`item.price-${i}`}>{item.price}</span>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  </section>
);

export default MySlice;
