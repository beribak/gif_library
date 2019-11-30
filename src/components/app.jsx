import React from 'react';

import SearchBar from '../containers/search_bar';
import Gif from '../containers/gif';
import GifList from '../containers/gif_list';


const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <GifList />
    </div>
  );
};

export default App;
