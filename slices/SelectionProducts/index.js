import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui';

const SelectionProducts = ({ slice }) => {
  return (
    <section>
      <RichText render={slice.primary.title} />
      <Flex>
        {slice?.items?.map((item, i) => {
          return (
            <Box key={item + i}>
              <img
                width='100%'
                src={item.selected_product.image}
                alt={item.selected_product.title}
                key={`img-${i}`}
                style={{ marginBottom: '16px' }}
              />
              <Flex sx={{ justifyContent: 'space-between', padding: '8px' }}>
                <span>{item.selected_product.description}</span>
                <span key={`item.price-${i}`}>
                  {item.selected_product.price}
                </span>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </section>
  );
};

export default SelectionProducts;
