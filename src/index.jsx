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
    return (
      <div>
        <SearchBar onSearchInputChange={ newText => this.videoSearch(newText) }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ clickedVideo => this.setState({ selectedVideo: clickedVideo }) }
          videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));