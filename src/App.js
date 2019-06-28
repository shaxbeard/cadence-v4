import React, { Component } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";
import PlaylistList from "./PlaylistList";
import PlaylistDetail from "./PlaylistDetail";

import PlaylistTracks from "./PlaylistTracks";

const spotifyWebApi = new Spotify();

class App extends Component {
  state = {
    access_tkn: "",
    userPlaylists: [],
    playlistId: null
  };

  componentDidMount() {
    const params = this.getHashParams();
    this.setState({ access_tkn: params.access_token });

    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  fetchUserPlaylists() {
    spotifyWebApi.getUserPlaylists().then(response => {
      this.setState({
        userPlaylists: response.items
      });
    });
  }

  onPlaylistSelect = playlist => {
    this.setState({ playlistId: playlist.id });
  };

  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button>Login with Spotify</button>
        </a>
        <div />
        Playlist ID: {this.state.playlistId} <br />
        <button onClick={() => this.fetchUserPlaylists()}>
          Fetch Playlists
        </button>
        <PlaylistDetail playlistId={this.state.playlistId} />
        <PlaylistTracks token={this.state.access_tkn} />
        <PlaylistList
          userPlaylists={this.state.userPlaylists}
          onPlaylistSelect={this.onPlaylistSelect}
        />
      </div>
    );
  }
}

export default App;
