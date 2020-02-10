import React from 'react';
import FilmList from './film-list';
import SearchPanel from './search-panel';

const App = () => (
  <div className="container">
    <SearchPanel />
    <FilmList />
  </div>
);
export default App;
