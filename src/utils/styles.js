const getStyles = (moduleSass) => (key = '', ...styles) =>
  styles.reduce((acc, value) => `${acc} ${value}`, moduleSass[key]);

export default getStyles;
