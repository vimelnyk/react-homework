import React from 'react';
import PropTypes from 'prop-types';
import './search-panel.css';

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

  render() {
    const { term } = this.state;
    return (
      <label htmlFor="search">
        Search panel
        <input
          name="search"
          placeholder="Search film..."
          value={term}
          onChange={(e) => this.onSearchChange(e)}
        />
      </label>
    );
  }
}

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
