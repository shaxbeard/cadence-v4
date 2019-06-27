import React, { Component } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";
import axios from "axios";

import PlaylistTracks from "./PlaylistTracks";

const spotifyWebApi = new Spotify();

class App extends Component {
  state = {
    access_tkn: "",
    nowPlaying: {
      name: "Not Checked",
      image: ""
    }
  };

  componentDidMount() {
    const params = this.getHashParams();
    this.setState({ access_tkn: params.access_token });

    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }

    axios
      .get(
        "https://api.spotify.com/v1/playlists/0UeDsSYClhiopusVz5tZxJ/tracks",
        {
          headers: {
            Authorization: "Bearer " + params.access_token
          }
        }
      )
      .then(response => {
        console.log(response);
      });
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

  getNowPlaying = () => {
    spotifyWebApi.getMyCurrentPlaybackState().then(response => {
      this.setState({
        nowPlaying: {
          name: response.item.name,
          image: response.item.album.images[0].url
        }
      });
    });
  };

  fetchPlaylistTracks = () => {
    spotifyWebApi.getPlaylistTracks().then(response => {
      console.log(response);
      // this.setState({
      //   nowPlaying: {
      //     name: response.item.name,
      //     image: response.item.album.images[0].url
      //   }
      // });
    });
  };

  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button>Login with Spotify</button>
        </a>
        <div> Now Playing {this.state.nowPlaying.name}</div>
        <img src={this.state.nowPlaying.image} />
        <div />
        <button onClick={() => this.fetchPlaylistTracks()}>
          Check Now Playing
        </button>
        <PlaylistTracks token={this.state.access_tkn} />
      </div>
    );
  }
}

export default App;
