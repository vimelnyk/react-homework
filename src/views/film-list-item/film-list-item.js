import React from 'react';
import PropTypes from 'prop-types';
import renderGenres from '../../utilities/render-genres';
import renderYear from '../../utilities/render-year';
import './film-list-item.scss';


const FilmListItem = ({
  title, image, releaseDate, genres,
}) => (
  <figure className="figure mb-2">
    <img src={image} className="figure__img" alt={title} />
    <figcaption className="figure__caption">
      {title}
      <br />
      <small>{renderYear(releaseDate)}</small>
      <br />
      <small>{renderGenres(genres)}</small>
    </figcaption>
  </figure>
);

FilmListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  genres: PropTypes.shape([]).isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default FilmListItem;
