import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAeFfCK1EeGHeBPg8xrKrGkhAJxZ0qTeSw';

YTSearch({
    key: API_KEY,
    term: 'surfboards'
}, function(res){
    console.log(res);
});

class App extends Component{
   constructor(props){
       super(props);

       this.state = {
           videos: [],
           selectedVideo: null
        };

       YTSearch({key: API_KEY,term: 'surfboards'}, (videos) => {
           this.setState({
               videos: videos,
               selectedVideo: videos[0]
           })
        });
   }

    
   
   render(){
    return  <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));