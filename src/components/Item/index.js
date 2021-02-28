/* eslint-disable camelcase */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import loadStyles from 'utils/styles';
import formatPrice from 'utils/numbers';
import itemBarStyles from './item.module.scss';

const getStyles = loadStyles(itemBarStyles);

const Item = ({
  title,
  price,
  address,
  thumbnail,
  thumbnail_id,
  onClick,
  shipping
}) => (
  <li className={getStyles('item')}>
    <div className={getStyles('item-container')}>
      <div
        className={getStyles('item-img-container')}
        onClick={onClick}
        role='figure'
      >
        <img
          src={thumbnail}
          alt={thumbnail_id}
          className={getStyles('item-img')}
        />
      </div>
      <div className={getStyles('item-info')}>
        <div
          className={getStyles('item-product-info')}
          onClick={onClick}
          role='region'
        >
          <div className={getStyles('item-price')}>
            <p className='paragraph--large'>{formatPrice(price)}</p>
            {shipping.free_shipping && (
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
          <p className={getStyles('item-city', 'captio')}>
            {address.city_name}
          </p>
        </div>
      </div>
    </div>
  </li>
);

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.shape({ city_name: PropTypes.string }),
  shipping: PropTypes.shape({ free_shipping: PropTypes.bool }),
  thumbnail: PropTypes.string,
  thumbnail_id: PropTypes.string,
  onClick: PropTypes.func
};
Item.defaultProps = {
  title: '',
  price: 0,
  address: { city_name: '' },
  shipping: { free_shipping: false },
  thumbnail: '',
  thumbnail_id: '',
  onClick: () => {}
};

export default Item;
