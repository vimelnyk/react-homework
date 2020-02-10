function convertGenresView(genres) {
  if (genres && genres.length) {
    return genres.join(' & ');
  }
  return 'N/a';
}
function convertYearView(releaseDate) {
  if (releaseDate && releaseDate.length) {
    return releaseDate.substr(0, 4);
  }
  return 'N/a';
}

export {
  convertGenresView,
  convertYearView,
};
