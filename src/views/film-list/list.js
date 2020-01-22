import React from 'react';
import Loader from '../loader';
import './list.scss';


export default class FilmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      items: [],
      error: null,
    };
    this.sortByRelease = this.sortByRelease.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            items: result.data,
            error: false,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoading: false,
            error: true,
          });
          console.log(error);
        },
      );
  }

  static renderYear(releaseDate) {
    if (releaseDate && releaseDate.length) {
      return releaseDate.substr(0, 4);
    }
    return 'N/a';
  }


  static renderGenres(genres) {
    if (genres && genres.length) {
      return genres.join(' & ');
    }
    return 'N/a';
  }

  render() {
    const { isLoading, items, error } = this.state;
    if (isLoading) {
      return <Loader />;
    }

    if (items && items.length === 0) {
      return 'Nothing was found';
    }
    if (error) {
      return 'Something went wrong((((';
    }
    return (
      <>
        <div className="row">
          <button type="button">
            Sort by release
          </button>
        </div>
        <div className="film-list row">
          {items.map((item) => (
            <div className="film-list__item  col-sm-6 col-xl-4" key={item.id}>
              <figure className="figure mb-2">
                <img src={item.poster_path} className="figure__img" alt={item.title} />
                <figcaption className="figure__caption">
                  {item.title}
                  <br />
                  <small>{FilmList.renderYear(item.release_date)}</small>
                  <br />
                  <small>{FilmList.renderGenres(item.genres)}</small>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </>
    );
  }
}
