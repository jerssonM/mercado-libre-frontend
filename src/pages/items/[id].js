/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from 'components/SearchBar';
import ItemDetail from 'components/ItemDetail';
import { PRODUCT_URL } from 'config/constants';
import { capitalizeText } from 'utils/strings';
import Breadcrumbs from 'components/Breadcrumbs';
import { useBreadcrumbs } from 'components/Breadcrumbs/BreadcrumbsProvider';

const fetchItemData = async (id) => {
  const [productDetail, productDescription] = await Promise.all([
    fetch(`${PRODUCT_URL}${id}`).then((response) => response.json()),
    fetch(`${PRODUCT_URL}${id}/description`).then((response) => response.json())
  ]);
  return { props: { productDetail, productDescription } };
};

const ItemDetailPage = ({ productDetail, productDescription }) => {
  const [breadcrumbs] = useBreadcrumbs();

  return (
    <div>
      <Head>
        <title>{capitalizeText(productDetail.title)} | Mercado libre</title>
      </Head>
      <section className='container-fluid'>
        <SearchBar defaultValue='' />
        <Breadcrumbs items={breadcrumbs} />
        <ItemDetail {...productDetail} description={productDescription} />
      </section>
    </div>
  );
};

ItemDetailPage.propTypes = {
  productDetail: PropTypes.object.isRequired,
  productDescription: PropTypes.object.isRequired
};

export const getServerSideProps = async (ctx) =>
  fetchItemData(ctx.query.id.toUpperCase());

export default ItemDetailPage;
