/* eslint-disable react/prop-types */
import NProgress from 'nprogress';
import React, { useEffect } from 'react';

import 'nprogress/nprogress.css';
import 'config/styles/global.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BreadcrumbsProvider from 'components/Breadcrumbs/BreadcrumbsProvider';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      parent: '#searchBar',
      speed: 300
    });
  }, []);

  return (
    <BreadcrumbsProvider>
      <Component {...pageProps} />
    </BreadcrumbsProvider>
  );
};

export default MyApp;
