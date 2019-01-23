import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Link from '../components/Link';

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 30px 10px 60px;
  max-width: 650px;

  ul,
  li {
    margin-left: 0px;
  }
`;

const App = ({ children }) => (
  <AppWrapper>
    <Helmet
      meta={[
        {
          name: 'description',
          content:
            'Legacy of Love Charity which raises money for ovarian cancer research'
        },
        { name: 'keywords', content: 'legacy of love charity' }
      ]}
      links={[
        {
          rel: 'shortcut icon',
          type: 'image/png',
          sizes: '16x16',
          href: __PATH_PREFIX__ + '/favicons/favicon-16x16.png'
        }
      ]}
    />

    {children()}

    <Footer>
      <small>
       <span>
          {' '}
          <Link href="https://www.philipbankier.com/"> PB Industries LLC</Link>
        </span>{' '}
        🐣
      </small>
    </Footer>
  </AppWrapper>
);

App.propTypes = {
  children: PropTypes.func
};

export default App;
