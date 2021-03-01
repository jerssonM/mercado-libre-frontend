import currency from 'currency.js';

const formatPrice = (value = 0) =>
  currency(Number(value), {
    separator: '.',
    symbol: '$',
    decimal: '.',
    precision: 0
  }).format();
export default formatPrice;
