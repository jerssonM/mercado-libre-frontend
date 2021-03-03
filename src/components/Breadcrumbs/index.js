import PropTypes from 'prop-types';
import React, { memo } from 'react';

import loadStyles from 'utils/styles';
import breadcrumbsStyles from './breadcrumbs.module.scss';

const getStyles = loadStyles(breadcrumbsStyles);

const Breadcrumbs = memo(({ items }) => {
  if (!items || !items.length) {
    return null;
  }

  return (
    <div className='container-fluid'>
      <div className='row center-xs'>
        <div className='col-md-9'>
          <ul className={getStyles('breadcrumbs-list')}>
            {items.map((item, index) => (
              <li key={item}>
                <p
                  className={getStyles('breadcrumbs-item', 'paragraph--small')}
                >
                  {item}
                </p>
                {index !== items.length - 1 ? (
                  <span className={getStyles('breadcrumbs-item-separator')}>
                    &gt;
                  </span>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};
Breadcrumbs.defaultProps = { items: [] };

export default Breadcrumbs;
