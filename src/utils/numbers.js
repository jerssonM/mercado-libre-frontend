import currency from 'currency.js';

const formatPrice = (value) =>
  value || value === 0
    ? currency(Number(value), {
        separator: '.',
        symbol: '$',
        decimal: '.',
        precision: 0
      }).format()
    : value;

export default formatPrice;
