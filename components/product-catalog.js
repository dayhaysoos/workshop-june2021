import React from 'react';
import { Grid, Box, Heading, Image, Paragraph, Flex } from 'theme-ui';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '../prismic';

function ProductCatalog({ products }) {
  return (
    <Grid columns={[1, 2, 3]}>
      {products.map((p) => {
        const { product, brand } = p;
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
                  as='h3'>
                  {title}
                </Paragraph>
                <Image src={image_url} />
                <RichText render={brand} htmlSerializer={htmlSerializer} />
              </a>
            </Link>
          </Flex>
        );
      })}
    </Grid>
  );
}

export default ProductCatalog;
