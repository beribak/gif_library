import React from 'react';

import SearchBar from '../containers/search_bar';
import Gif from '../containers/gif';


const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <Gif />
    </div>
  );
};

export default App;
