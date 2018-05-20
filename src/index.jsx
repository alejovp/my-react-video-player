import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import Constants from './constants';

const { YT_API_KEY } = Constants;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch(
      { key: YT_API_KEY, term: 'surfboards' }, 
      (resVideos) => {
        this.setState({ videos: resVideos });
      }
    );
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] } />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));