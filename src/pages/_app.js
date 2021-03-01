/* eslint-disable react/prop-types */
import React from 'react';
import 'config/styles/global.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BreadcrumbsProvider from 'components/Breadcrumbs/BreadcrumbsProvider';

const MyApp = ({ Component, pageProps }) => (
  <BreadcrumbsProvider>
    <Component {...pageProps} />
  </BreadcrumbsProvider>
);

export default MyApp;
