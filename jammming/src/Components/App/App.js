import React from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify';

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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  addTrack(newTrack) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === newTrack.id)) {
      return;
    }
    tracks.push(newTrack);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(trackToRemove) {
    let tracks = this.state.playlistTracks;
    let newTracks = tracks.filter(track => track.id !== trackToRemove.id);
    this.setState({playlistTracks: newTracks});
  }

  updatePlaylistName(newPlaylistName) {
    this.setState({playlistName: newPlaylistName});
  }

  savePlaylist() {
    alert('save playlist clicked!');
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  onSearch(searchTerm) {
    console.log('Searching ' + searchTerm);
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.onSearch}/>
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}  
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }

};