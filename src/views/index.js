import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
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
    if (items.length === 0) {
      return items;
    }
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
      searchBy: '',
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
            searchBy: '',
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
          searchBy: '',
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

  onSearchSwitch(value) {
    this.setState({
      searchBy: value,
    });
  }

  render() {
    const {
      isLoading, items, term, error, searchBy,
    } = this.state;
    const visibleItems = (searchBy === 'genres') ? App.searchByGenre(items, term) : App.search(items, term);


    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <section className="intro-section">
              <Header label="netflixroulette" />
              <SearchPanel
                onSearchChange={(e) => this.onSearchChange(e)}
                onSearchSwitch={(e) => this.onSearchSwitch(e)}
              />
            </section>
            <section>
              <FilmList isLoading={isLoading} items={visibleItems} error={error} />
            </section>
            <Footer />
          </Route>
          <Route
            path="/film/:id"
            render={(match) => {
              console.log(match);
              console.log(items);

              const { id } = match.match.params;
              items.id = id;
              console.log(items);

              return <MyComp id={id} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

const MyComp = ({ id }) => (
  <h1>
My Comp
    { id}
  </h1>
);

MyComp.propTypes = {
  id: PropTypes.number.isRequired,
};
