import React from 'react';
import Head from 'next/head';

import SearchBar from 'components/SearchBar';

const Home = () => (
  <div>
    <Head>
      <title>Mercado libre</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css'
        type='text/css'
      />
    </Head>
    <section className='container-fluid'>
      <SearchBar />
    </section>
  </div>
);

export default Home;
