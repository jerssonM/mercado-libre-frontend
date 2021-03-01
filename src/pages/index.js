import React from 'react';
import Head from 'next/head';

import SearchBar from 'components/SearchBar';

const Home = () => (
  <div>
    <Head>
      <title>Mercado libre</title>
    </Head>
    <section className='container-fluid'>
      <SearchBar />
    </section>
  </div>
);

export default Home;
