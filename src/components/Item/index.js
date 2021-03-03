/* eslint-disable camelcase */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import loadStyles from 'utils/styles';
import formatPrice from 'utils/numbers';
import itemBarStyles from './item.module.scss';

const getStyles = loadStyles(itemBarStyles);

const Item = ({ title, price, onClick, picture, city_name, free_shipping }) => (
  <li className={getStyles('item')}>
    <div className={getStyles('item-container')}>
      <div
        className={getStyles('item-img-container')}
        onClick={onClick}
        role='figure'
      >
        <img src={picture} alt={title} className={getStyles('item-img')} />
      </div>
      <div className={getStyles('item-info')}>
        <div
          className={getStyles('item-product-info')}
          onClick={onClick}
          role='region'
        >
          <div className={getStyles('item-price')}>
            <p className='paragraph--large'>{formatPrice(price.amount)}</p>
            {free_shipping && (
              <Image
                src='/img/shipping.png'
                alt='logo'
                width='20'
                height='20'
              />
            )}
          </div>
          <p className={getStyles('item-title', 'paragraph')}>{title}</p>
        </div>
        <div className={getStyles('item-addressInfo')}>
          <p className={getStyles('item-city', 'caption')}>{city_name}</p>
        </div>
      </div>
    </div>
  </li>
);

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.shape({ amount: PropTypes.number }),
  picture: PropTypes.string,
  free_shipping: PropTypes.bool,
  city_name: PropTypes.string,
  onClick: PropTypes.func
};
Item.defaultProps = {
  title: '',
  price: { amount: 0 },
  city_name: '',
  free_shipping: false,
  picture: '',
  onClick: () => {}
};

export default Item;
