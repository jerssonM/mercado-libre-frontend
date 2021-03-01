import { capitalizeText, removeAccentsMark } from 'utils/strings';

describe('strings', () => {
  it('should capitalize text', () => {
    expect(capitalizeText('text to capitalize')).toBe('Text To Capitalize');
  });
  it('should capitalize text with default params', () => {
    expect(capitalizeText()).toBe('');
  });
  it('should remove accents mark', () => {
    expect(removeAccentsMark('Tést')).toBe('Test');
  });
});
