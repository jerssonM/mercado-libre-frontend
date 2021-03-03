/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import { capitalizeText } from 'utils/strings';
import Breadcrumbs from 'components/Breadcrumbs';
import { SEARCH_PRODUCT_URL } from 'config/constants';
import { useBreadcrumbs } from 'components/Breadcrumbs/BreadcrumbsProvider';

const fetchItems = async (item) => {
  const response = await fetch(`${SEARCH_PRODUCT_URL}${item}`);
  const data = await response.json();
  return { props: { ...data, item } };
};

const Item = ({ item, items, categories }) => {
  const [, setBreadcrumbs] = useBreadcrumbs();

  useEffect(() => {
    NProgress.done();
  }, [item]);

  useEffect(() => {
    setBreadcrumbs(categories);
  }, [categories]);

  return (
    <div>
      <Head>
        <title>{capitalizeText(item)} | Mercado libre</title>
      </Head>
      <section className='container-fluid'>
        <SearchBar defaultValue={item} />
        <Breadcrumbs items={categories} />
        <ItemList items={items} />
      </section>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

export const getServerSideProps = async (ctx) => fetchItems(ctx.query.search);

export default Item;
