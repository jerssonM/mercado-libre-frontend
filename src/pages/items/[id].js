/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import SearchBar from 'components/SearchBar';
import ItemDetail from 'components/ItemDetail';
import { PRODUCT_URL } from 'config/constants';
import { capitalizeText } from 'utils/strings';
import Breadcrumbs from 'components/Breadcrumbs';
import { useBreadcrumbs } from 'components/Breadcrumbs/BreadcrumbsProvider';

const fetchItemData = async (id) => {
  const response = await fetch(`${PRODUCT_URL}${id}`);
  const data = await response.json();
  return { props: data };
};

const ItemDetailPage = ({ item }) => {
  const [breadcrumbs] = useBreadcrumbs();

  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <div>
      <Head>
        <title>{capitalizeText(item.title)} | Mercado libre</title>
      </Head>
      <section className='container-fluid'>
        <SearchBar defaultValue='' />
        <Breadcrumbs items={breadcrumbs} />
        <ItemDetail {...item} />
      </section>
    </div>
  );
};

ItemDetailPage.propTypes = {
  item: PropTypes.object.isRequired
};

export const getServerSideProps = async (ctx) =>
  fetchItemData(ctx.query.id.toUpperCase());

export default ItemDetailPage;
