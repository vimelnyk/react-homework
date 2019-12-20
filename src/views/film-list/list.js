import React from 'react';
import Loader from '../loader';
import './list.scss';


export default class FilmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      items: [],
    };
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
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error: true,
          });
          console.log(error);
        },
      );
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    if (this.state.items && this.state.items.length === 0) {
      return 'Nothing was found';
    }
    if (this.state.error) {
      return 'Something went wrong((((';
    }
    return (
      <div className="film-list row">
        {this.state.items.map((item) => (
          <div className="film-list__item  col-sm-6 col-xl-4" key={item.id}>
            <figure className="figure mb-2">
              <img src={item.poster_path} className="figure__img" alt={item.title} />
              <figcaption className="figure__caption">{item.title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    );
  }
}
