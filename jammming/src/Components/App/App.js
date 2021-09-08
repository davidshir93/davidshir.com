import React from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Hello',
          artist: 'Addel',
          album: 'New First',
          id: 1000
        },
        {
          name: 'Its me',
          artist: 'David',
          album: 'Second',
          id: 1001
        },
        {
          name: 'Bye Bye',
          artist: 'Shir',
          album: 'Jerusalem',
          id: 1002
        }
      ],
      playlistName: 'New Playlist',
      playlistTracks: [
        {
          name: 'Bye Bye',
          artist: 'Shir',
          album: 'Jerusalem',
          id: 1006
        }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(newTrack) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === newTrack.id)) {
      return;
    }
    tracks.push(newTrack);
    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}  
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
            />
          </div>
        </div>
      </div>
    )
  }

};