import React from 'react';
import { Flex, Box, Heading, Image, Paragraph, Button } from 'theme-ui';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import { RichText } from 'prismic-reactjs';
function Product({ product }) {
  const { description, image_url, title, sku, price, features, callout } =
    product;

  const { addItem } = useShoppingCart();

  return (
    <>
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
          <Box>
            <ul>
              <RichText render={callout} />
            </ul>
          </Box>
        </Flex>
      </Flex>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Heading as='h3'>Description</Heading>
          <p>{description}</p>
        </Box>
        <RichText render={features} />
      </Flex>
    </>
  );
}

export default Product;
