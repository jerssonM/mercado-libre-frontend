/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import SearchBar from 'components/SearchBar';
import ItemDetail from 'components/ItemDetail';
import { PRODUCT_URL } from 'config/constants';

const fetchItemData = async (id) => {
  const [productDetail, productDescription] = await Promise.all([
    fetch(`${PRODUCT_URL}${id}`).then((response) => response.json()),
    fetch(`${PRODUCT_URL}${id}/description`).then((response) => response.json())
  ]);
  return { props: { productDetail, productDescription } };
};

const ItemDetailPage = ({ productDetail, productDescription }) => (
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
      <SearchBar defaultValue='' />
      <ItemDetail {...productDetail} description={productDescription} />
    </section>
  </div>
);

ItemDetailPage.propTypes = {
  productDetail: PropTypes.object.isRequired,
  productDescription: PropTypes.object.isRequired
};

export const getServerSideProps = async (ctx) =>
  fetchItemData(ctx.query.id.toUpperCase());

export default ItemDetailPage;
