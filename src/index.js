import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA7UPuQfjc1np3clNnJDOvRa_tQYe_6P-U';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
      }
      this.searchVideos('mooji');
    }

    searchVideos(term) {
       YTSearch({key:API_KEY, term: term}, (videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
        });
      });
    }

    render() {
        return(
          <div>
            <Search onSearchTermChange={term => this.searchVideos(term)}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
              onVideoSelected={selectedVideo => this.setState({selectedVideo})} 
              videos = {this.state.videos}/>
          </div>
        );
    }

}



ReactDOM.render(
	<App />, 
	document.querySelector('.container')
);