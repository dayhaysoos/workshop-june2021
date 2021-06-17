import React from 'react';
import Head from 'next/head';
import Product from '../../components/product';

import {
  queryRepeatableDocuments,
  queryDocsByType,
  queryDocByUID,
} from '../../queries';

import Layout from '../../components/layout';

const ProductPage = ({ product }) => {
  return (
    <Layout>
      <Product product={product} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const allProducts = await queryDocsByType('product');

  return {
    paths: allProducts.results.map((prod) => {
      return `/products/${prod.uid}`;
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const collection = await queryRepeatableDocuments(
    (doc) => doc.type === 'product_collection'
  );

  const product = await queryDocByUID(params.uid);

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
