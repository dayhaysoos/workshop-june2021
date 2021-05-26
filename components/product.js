import React from 'react';
import { Flex, Box, Heading, Image, Paragraph, Button } from 'theme-ui';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';

function Product({ product }) {
  const { description, image_url, title, sku, price } = product;

  const { addItem } = useShoppingCart();

  return (
    <Flex sx={{ justifyContent: 'space-between' }}>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image src={image_url} />
      </Flex>
      <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
        <Heading as='h2'>{title}</Heading>
        <Box as='p' sx={{ fontSize: '24px', marginBottom: '24px' }}>
          {formatCurrencyString({ value: price, currency: 'USD' })}
        </Box>
        <Paragraph marginBottom='24px' variant={'default'}>
          {description || ''}
        </Paragraph>
        <Button onClick={() => addItem(product)}>Add to Cart</Button>
      </Flex>
    </Flex>
  );
}

export default Product;
