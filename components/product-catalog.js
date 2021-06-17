import React from 'react';
import { Grid, Box, Heading, Image, Paragraph, Flex } from 'theme-ui';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '../prismic';

function ProductCatalog({ products }) {
  return (
    <Grid columns={[1, 2, 3]}>
      {products.map((product) => {
        const { uid, data } = product;
        const { image_url, title } = data.linked_product;
        return (
          <Flex
            key={uid}
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
            <Link href={`/products/${uid}`}>
              <a>
                <Paragraph
                  sx={{ fontSize: '18px', marginBottom: '8px' }}
                  as='h3'>
                  {title}
                </Paragraph>
                <Image src={image_url} />
                <RichText render={data.brand} htmlSerializer={htmlSerializer} />
              </a>
            </Link>
          </Flex>
        );
      })}
    </Grid>
  );
}

export default ProductCatalog;
