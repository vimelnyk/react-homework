import React from 'react';
import FilmList from './film-list';
import SearchPanel from './search-panel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      items: [],
      error: null,
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

  render() {
    const { isLoading, items, error } = this.state;
    return (
      <div className="container">
        <SearchPanel />
        <FilmList isLoading={isLoading} items={items} error={error} />
      </div>
    );
  }
}
