import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext, createContext } from 'react';

const BreadcrumbsContext = createContext();

const BreadcrumbsProvider = ({ children, initialState }) => {
  const [breadcrumbs, setBreadcrumbs] = useState(initialState);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};

BreadcrumbsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  )
};
BreadcrumbsProvider.defaultProps = { initialState: [] };

export const useBreadcrumbs = () => {
  const { breadcrumbs, setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    const savedBreadcrumbs = localStorage.getItem('breadcrumbs');
    if (savedBreadcrumbs && !breadcrumbs.length) {
      setBreadcrumbs(JSON.parse(savedBreadcrumbs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
  }, [breadcrumbs]);

  return [breadcrumbs, setBreadcrumbs];
};

export default BreadcrumbsProvider;
