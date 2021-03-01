/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useMemo, useEffect } from 'react';

import ItemList from 'components/ItemList';
import capitalizeText from 'utils/strings';
import SearchBar from 'components/SearchBar';
import Breadcrumbs from 'components/Breadcrumbs';
import { SEARCH_PRODUCT_URL } from 'config/constants';
import { useBreadcrumbs } from 'components/Breadcrumbs/BreadcrumbsProvider';

const fetchItems = async (item) => {
  const response = await fetch(`${SEARCH_PRODUCT_URL}${item}`);
  const data = await response.json();
  return { props: { productData: data, item } };
};

const Item = ({ item, productData }) => {
  const [, setBreadcrumbs] = useBreadcrumbs();

  const breadcrumbItems = useMemo(() => {
    const filter = productData.filters[0];
    if (filter && filter.values[0]) {
      return filter.values[0].path_from_root;
    }
    return [];
  }, [productData]);

  useEffect(() => {
    setBreadcrumbs(breadcrumbItems);
  }, [breadcrumbItems]);

  return (
    <div>
      <Head>
        <title>{capitalizeText(item)} | Mercado libre</title>
      </Head>
      <section className='container-fluid'>
        <SearchBar defaultValue={item} />
        <Breadcrumbs items={breadcrumbItems} />
        <ItemList items={productData.results} />
      </section>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  productData: PropTypes.object.isRequired
};

export const getServerSideProps = async (ctx) => fetchItems(ctx.query.search);

export default Item;
