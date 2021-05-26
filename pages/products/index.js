import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import ProductCatalog from '../../components/product-catalog';

import { queryRepeatableDocuments } from '../../queries';
import { Heading } from '@theme-ui/components';

export async function getStaticProps() {
  const products = await queryRepeatableDocuments(
    (doc) => doc.type === 'product_collection'
  );
  return {
    props: {
      products: products[0].data.products,
    },
  };
}

function Products({ products }) {
  return (
    <Layout>
      <Heading as='h1' sx={{ textAlign: 'center' }}>
        Products
      </Heading>
      <ProductCatalog products={products} />
    </Layout>
  );
}

export default Products;
