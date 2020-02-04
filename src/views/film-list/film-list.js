import React from 'react';
import Loader from '../loader';
import SortButton from '../sort-button';
import FilmListItem from '../film-list-item';
import './film-list.scss';


export default class FilmList extends React.Component {
  static convertDate(key) {
    if (key === 'release_date') {
      return Date.parse(key);
    }
    return key;
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      items: [],
      error: null,
      sortDesc: null,
    };
    this.sortBy.bind(this);
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

  sortBy(key) {
    const { items } = this.state;
    const { sortDesc } = this.state;

    const dataArrRes = items.sort((a, b) => {
      if (sortDesc) {
        return (FilmList.convertDate(a[key]) > FilmList.convertDate(b[key])) ? -1 : 1;
      }
      return (FilmList.convertDate(a[key]) > FilmList.convertDate(b[key])) ? 1 : -1;
    });

    this.setState({
      items: dataArrRes,
      sortDesc: !sortDesc,
    });
  }

  render() {
    const { isLoading, items, error } = this.state;
    const itemsLength = (items.length === 1) ? 'One film found' : `${items.length} movies found`;
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
          <div>
            <div>
              {itemsLength}
            </div>
            <div>
              <span>Sort by </span>
              <SortButton label="release" onPress={() => this.sortBy('release_date')} />
              <SortButton label="rating" onPress={() => this.sortBy('vote_average')} />
            </div>
          </div>
        </div>
        <div className="film-list row">
          {items.map((item) => (
            <div className="film-list__item  col-sm-6 col-xl-4" key={item.id}>
              <FilmListItem
                image={item.poster_path}
                title={item.title}
                releaseDate={item.release_date}
                genres={item.genres}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
