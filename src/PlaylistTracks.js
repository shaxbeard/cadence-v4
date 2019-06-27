import React from "react";
import axios from "axios";

class PlaylistTracks extends React.Component {
  render() {
    console.log(this.props.token);

    axios
      .get(
        "https://api.spotify.com/v1/playlists/0UeDsSYClhiopusVz5tZxJ/tracks",
        {
          headers: {
            Authorization: "Bearer " + this.props.token
          }
        }
      )
      .then(response => {
        console.log(response);
      });

    return <div>{this.props.token}</div>;
  }
}

export default PlaylistTracks;
