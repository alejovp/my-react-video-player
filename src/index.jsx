import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCsRxUXM6-jp930ID7WkQ9Y1RNIEJ2oaao';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch(
      { key: API_KEY, term: 'surfboards' }, 
      (resVideos) => {
        this.setState({ videos: resVideos });
      }
    );
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));