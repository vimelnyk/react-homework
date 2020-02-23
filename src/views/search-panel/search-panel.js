import React from 'react';
import PropTypes from 'prop-types';
import './search-panel.css';
import SearchButton from '../search-button';

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onSearchChange(e) {
    const { onSearchChange } = this.props;
    const term = e.target.value;
    this.setState({
      term,
    });
    console.log(term);
    onSearchChange(term);
  }

  searchBy(e) {
    const { onSearchSwitch } = this.props;
    const { value } = e.target;
    onSearchSwitch(value);
  }


  render() {
    const { term } = this.state;
    return (
      <>
        <label htmlFor="search">
          Search panel
          <input
            name="search"
            placeholder="Search film..."
            value={term}
            onChange={(e) => this.onSearchChange(e)}
          />
        </label>
        Search by
        <SearchButton label="Title" value="title" onPress={(e) => this.searchBy(e)} />
        <SearchButton label="Genre" value="genres" onPress={(e) => this.searchBy(e)} />
      </>
    );
  }
}

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onSearchSwitch: PropTypes.func.isRequired,
};
