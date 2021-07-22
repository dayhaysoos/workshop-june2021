import React from 'react';
import { Box, Heading } from 'theme-ui';

function Title({ slice }) {
  return (
    <>
      <Box>
        <Heading>
          <Box as='span'>{slice.primary.title_1}</Box>
          <Box as='span'>{slice.primary.title_2}</Box>
        </Heading>
      </Box>
    </>
  );
}

export default Title;
