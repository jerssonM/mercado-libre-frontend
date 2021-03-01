const capitalizeText = (text = '') => {
  const splittedText = text.split(' ');

  return splittedText
    .reduce(
      (acc, value) =>
        `${acc} ${value.charAt(0).toUpperCase()}${value.slice(1)}`,
      ''
    )
    .trim();
};

export default capitalizeText;
