export const capitalizeText = (text = '') => {
  const splittedText = text.split(' ');

  return splittedText
    .reduce(
      (acc, value) =>
        `${acc} ${value.charAt(0).toUpperCase()}${value.slice(1)}`,
      ''
    )
    .trim();
};

export const removeAccentsMark = (text) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
