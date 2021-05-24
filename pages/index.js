import React from 'react';
import {
  Container,
  Heading,
  Grid,
  Card,
  Text,
  Box,
  Image,
  Button,
  useColorMode,
} from 'theme-ui';

import { Client } from '../prismic';
import SliceZone from 'next-slicezone';
import { useGetStaticProps } from 'next-slicezone/hooks';
import resolver from '../sm-resolver';

import Layout from '../components/layout';

export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => 'home',
});

const IndexPage = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Layout>
      <Button
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
      <section style={{ width: '100%', height: '100%' }}>
        <SliceZone {...props} resolver={resolver} />
      </section>
    </Layout>
  );
};

export default IndexPage;
