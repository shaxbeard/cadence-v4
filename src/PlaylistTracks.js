import React from "react";
import axios from "axios";
import PlaylistTrackList from "./PlaylistTrackList";

class PlaylistTracks extends React.Component {
  state = { playlistTrackList: [] };

  fetchPlaylistTracks = async () => {
    console.log(this.props.playlistId);
    const response = await axios.get(
      "https://api.spotify.com/v1/playlists/" +
        this.props.playlistId +
        "/tracks",
      {
        headers: {
          Authorization: "Bearer " + this.props.token
        }
      }
    );
    this.setState({ playlistTrackList: response.data.items });
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchPlaylistTracks}>Get Tracks</button>
        <PlaylistTrackList tracks={this.state.playlistTrackList} />
      </div>
    );
  }
}

export default PlaylistTracks;
