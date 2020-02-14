import React from 'react';
import FilmList from './film-list';
import MoviesService from '../services/movies-service';
import SearchPanel from './search-panel';

export default class App extends React.Component {
  static search(items, term) {
    if (items.length === 0) {
      return items;
    }
    return items.filter((item) => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  static searchByGenre(items, term) {
    return items.filter((i) => (
      i.genres.filter(
        (item) => item.toLowerCase().indexOf(term.toLowerCase()) > -1,
      ).length > 0
    ));
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      items: [],
      term: '',
      error: false,
    };
  }


  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    MoviesService.getResource();
    fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            items: result.data,
            term: '',
            error: false,
          });
          console.log(result);
        },
      )
      .catch((error) => {
        this.setState({
          isLoading: false,
          items: [],
          term: '',
          error: true,
        });
        console.log(error);
      });
  }

  onSearchChange(term) {
    this.setState({
      term,
    });
  }

  render() {
    const {
      isLoading, items, term, error,
    } = this.state;
    const visibleItems = App.search(items, term);

    return (
      <div className="container">
        <SearchPanel onSearchChange={(e) => this.onSearchChange(e)} />
        <FilmList isLoading={isLoading} items={visibleItems} error={error} />
      </div>
    );
  }
}
