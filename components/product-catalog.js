import React from 'react';
import { Grid, Box, Heading, Image, Paragraph, Flex } from 'theme-ui';
import Link from 'next/link';

function ProductCatalog({ products }) {
  return (
    <Grid columns={[1, 2, 3]}>
      {products.map((p) => {
        const { product, description } = p;
        const { image_url, sku, title } = product;
        return (
          <Flex
            key={sku}
            sx={{
              padding: '8px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #edf0f5',
              transition: 'all 0.3s ease-in',
              '&:hover': {
                borderColor: 'black',
              },
            }}>
            <Link href={`/products/${sku}`}>
              <a>
                <Paragraph
                  sx={{ fontSize: '18px', marginBottom: '8px' }}
                  as='h2'>
                  {title}
                </Paragraph>
                <Image src={image_url} />
                <Paragraph variant='default'>{description || ''}</Paragraph>
              </a>
            </Link>
          </Flex>
        );
      })}
    </Grid>
  );
}

export default ProductCatalog;
