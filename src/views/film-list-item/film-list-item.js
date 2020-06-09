import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  convertGenresView,
  convertYearView,
} from '../../utilities/utilities';
import './film-list-item.scss';


const FilmListItem = ({
  id, title, image, releaseDate, genres,
}) => (
  <Link to={`/film/${id}`}>
    {title}
    {id}
    {' '}
Film
    <figure className="figure mb-2">
      <img src={image} className="figure__img" alt={title} />
      <figcaption className="figure__caption">
        {title}
        <br />
        <small>{convertYearView(releaseDate)}</small>
        <br />
        <small>{convertGenresView(genres)}</small>
      </figcaption>
    </figure>
  </Link>
);

FilmListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default FilmListItem;
