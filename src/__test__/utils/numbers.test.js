import formatPrice from 'utils/numbers';

describe('numbers', () => {
  it('should format number', () => {
    expect(formatPrice(3000)).toBe('$3.000');
  });
  it('should format number with default params', () => {
    expect(formatPrice()).toBe('$0');
  });
});
