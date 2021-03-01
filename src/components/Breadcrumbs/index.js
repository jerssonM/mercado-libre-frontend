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
            {items.map(({ id, name }, index) => (
              <li key={id}>
                <p
                  className={getStyles('breadcrumbs-item', 'paragraph--small')}
                >
                  {name}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  )
};
Breadcrumbs.defaultProps = { items: [] };

export default Breadcrumbs;
