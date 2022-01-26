import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = "BgvgJ7z9KuO0jqm8vEJVKA6AKjIaNTIo"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs = [],
      selectedGifId = "k8kITi9SAwe9JWbUaH"
    };
    this.selectGif = this.selectGif.bind(this);
  }
  selectGif(id) {
    this.setState({
      selectGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene"></div>
        <div className="right-scene">
          <Giflist gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )  
  }
}

export default App;
