/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import Breadcrumbs from 'components/Breadcrumbs';
import { SEARCH_PRODUCT_URL } from 'config/constants';

const fetchItems = async (item) => {
  const response = await fetch(`${SEARCH_PRODUCT_URL}${item}`);
  const data = await response.json();
  return { props: { productData: data, item } };
};

const Item = ({ item, productData }) => (
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
      <SearchBar defaultValue={item} />
      <Breadcrumbs items={productData.filters[0].values[0].path_from_root} />
      <ItemList items={productData.results} />
    </section>
  </div>
);

Item.propTypes = {
  item: PropTypes.string.isRequired,
  productData: PropTypes.object.isRequired
};

export const getServerSideProps = async (ctx) => fetchItems(ctx.query.search);

export default Item;
