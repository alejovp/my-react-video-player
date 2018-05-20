import _ from 'lodash';
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

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(text) {
    YTSearch(
      { key: YT_API_KEY, term: text },
      (resVideos) => {
        this.setState({
          videos: resVideos,
          selectedVideo: resVideos[0]
        });
      }
    );
  }
  
  render() {
    // Using lodash to run videoSearch only in 300 ms, no matter how many times input change.
    const videoSearch = _.debounce((text) => {this.videoSearch(text)}, 300);

    return (
      <div>
        <SearchBar onSearchInputChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ clickedVideo => this.setState({ selectedVideo: clickedVideo }) }
          videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));