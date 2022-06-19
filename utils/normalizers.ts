export const normalizerBook = (data) => {
  const { volumeInfo, id } = data;
  const { authors, publisher, title } = volumeInfo || {};
  const _authors = Array.isArray(authors) ? authors : [];

  return {
    id,
    authors: _authors,
    publisher,
    title,
  };
};
