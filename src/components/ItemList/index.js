/* eslint-disable react/forbid-prop-types */
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import Item from 'components/Item';
import loadStyles from 'utils/styles';
import itemListStyles from './itemList.module.scss';

const getStyles = loadStyles(itemListStyles);

const ItemList = ({ items }) => {
  const { push } = useRouter();

  const redirectToItemDetail = (id) => {
    NProgress.start();
    push(`/items/${id.toLowerCase()}`);
  };

  const slicedItems = useMemo(
    () =>
      items.slice(0, 4).map((item) => (
        <Item
          {...item}
          key={item.id}
          onClick={() => {
            redirectToItemDetail(item.id);
          }}
        />
      )),
    [items]
  );

  return (
    <section className='container-fluid'>
      <div className='row center-xs'>
        <ul className={getStyles('itemList', 'col-xs-12 col-md-9')}>
          {slicedItems}
        </ul>
      </div>
    </section>
  );
};

ItemList.propTypes = { items: PropTypes.array };
ItemList.defaultProps = { items: [] };

export default ItemList;
