import React from 'react';

import SearchBar from '../containers/search_bar';
// import Gif from '../containers/gif';
import GifList from '../containers/gif_list';
import Carousell from '../containers/carousell';

// import Carousel from 'react-bootstrap/Carousel';

const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <Carousell />
      <GifList />
    </div>
  );
};

export default App;
