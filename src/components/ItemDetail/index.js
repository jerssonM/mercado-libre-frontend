/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import loadStyles from 'utils/styles';
import formatPrice from 'utils/numbers';
import { productConditions } from 'config/constants';
import itemDetailStyles from './itemDetail.module.scss';

const getStyles = loadStyles(itemDetailStyles);

const ItemDetail = ({
  title,
  price,
  pictures,
  condition,
  sold_quantity,
  description
}) => {
  const { t } = useTranslation();

  const formatedCondition = useMemo(() => {
    switch (condition) {
      case productConditions.NEW:
        return 'Nuevo';
      case productConditions.USED:
        return 'Usado';
      default:
        return 'Nuevo';
    }
  }, [condition]);

  return (
    <section className='container-fluid'>
      <div className='row center-xs'>
        <div
          className={getStyles('itemDetail-container', 'col-xs-12', 'col-md-9')}
        >
          <div className='row between-xs'>
            <div className='col-xs-12 col-md-8'>
              <Carousel
                autoPlay={false}
                autoFocus={false}
                showThumbs={false}
                showStatus={false}
                className={getStyles('itemDetail-carousel')}
              >
                {pictures.map((picture) => (
                  <div
                    className={getStyles('itemDetail-img-container')}
                    key={picture.id}
                  >
                    <img
                      alt='product-img'
                      src={picture.url}
                      className={getStyles('itemDetail-img')}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div
              className={getStyles(
                'itemDetail-information',
                'col-xs-12',
                'col-md-4'
              )}
            >
              <p className='paragraph--small'>
                <span>{formatedCondition}</span> - {sold_quantity}{' '}
                {t('soldOut')}
              </p>
              <p
                className={getStyles(
                  'itemDetail-title',
                  'paragraph--large',
                  'text--bold'
                )}
              >
                {title}
              </p>
              <p className={getStyles('itemDetail-price', 'price-large')}>
                {formatPrice(price.amount)}
              </p>
              <button className='btn btn-primary' type='button'>
                {t('buy')}
              </button>
            </div>
            <div
              className={getStyles(
                'itemDetail-description',
                'col-xs-12',
                'col-md-8'
              )}
            >
              <p
                className={getStyles(
                  'itemDetail-description-title',
                  'subtitle',
                  'text--left'
                )}
              >
                {t('productDescription')}
              </p>
              <p
                className={getStyles(
                  'itemDetail-description-paragraph',
                  'paragraph',
                  'text--justify'
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ItemDetail.propTypes = {
  title: PropTypes.string,
  price: PropTypes.shape({ amount: PropTypes.number }),
  condition: PropTypes.string,
  description: PropTypes.string,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, url: PropTypes.string })
  ),
  sold_quantity: PropTypes.number
};
ItemDetail.defaultProps = {
  title: '',
  price: 0,
  condition: '',
  sold_quantity: 0,
  pictures: [],
  description: ''
};

export default ItemDetail;
