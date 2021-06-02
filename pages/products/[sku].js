import React from 'react';
import Head from 'next/head';
import Product from '../../components/product';

import { queryRepeatableDocuments } from '../../queries';

import Layout from '../../components/layout';

const ProductPage = ({ product }) => {
  return (
    <Layout>
      <Product product={product} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const collection = await queryRepeatableDocuments(
    (docs) => docs.type === 'product_collection'
  );

  return {
    paths: collection[0].data.products.map((prod) => {
      return `/products/${prod.product.sku}`;
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const collection = await queryRepeatableDocuments(
    (doc) => doc.type === 'product_collection'
  );

  const selectedProduct = collection[0].data.products.find((prod) => {
    return prod.product.sku === params.sku;
  });

  return {
    props: {
      product: {
        ...selectedProduct.product,
        callout: selectedProduct.callout,
        brand: selectedProduct.brand,
        description: selectedProduct.description,
        features: selectedProduct.features,
      },
    },
  };
}

export default ProductPage;
