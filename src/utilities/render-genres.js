function renderGenres(genres) {
  if (genres && genres.length) {
    return genres.join(' & ');
  }
  return 'N/a';
}

export default renderGenres;
