import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import loadStyles from 'utils/styles';
import searchBarStyles from './searchBar.module.scss';

const getStyles = loadStyles(searchBarStyles);

const SearchBar = ({ defaultValue }) => {
  const { push } = useRouter();
  const [searchText, setSearchText] = useState(defaultValue);

  const onChangeInputSearch = ({ target: { value } }) => {
    setSearchText(value);
  };

  const onSearch = (event) => {
    if (event && event.code !== 'Enter') return;
    if (searchText) {
      push(`/items?search=${searchText.toLowerCase()}`, undefined);
    }
  };

  return (
    <div className={getStyles('searchBar', 'row', 'center-xs')}>
      <div className='col-xs-12 col-md-9'>
        <div className='row middle-xs'>
          <div
            className={getStyles('searchBar-logo-container', 'col-xs')}
            onClick={() => {
              push('/');
            }}
            role='figure'
          >
            <Image src='/img/logoML.png' alt='logo' width='80' height='60' />
          </div>
          <div
            className={getStyles(
              'searchBar-input-container',
              'col-xs-10',
              'col-md-11'
            )}
          >
            <input
              data-testid='searchBar-input'
              autoComplete='on'
              className={getStyles('searchBar-input', 'input-text')}
              placeholder='Nunca dejes de buscar'
              onKeyPress={(e) => {
                onSearch(e);
              }}
              onChange={onChangeInputSearch}
              value={searchText}
            />
            <button
              className={getStyles('searchBar-button')}
              onClick={() => {
                onSearch();
              }}
              data-testid='searchBar-button'
              type='button'
            >
              <Image src='/img/search.png' alt='logo' width='25' height='25' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  defaultValue: PropTypes.string
};
SearchBar.defaultProps = { defaultValue: '' };

export default SearchBar;
