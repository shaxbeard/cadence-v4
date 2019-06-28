import React from "react";

const PlaylistDetail = props => {
  if (!props.playlistId) {
    return <div>Loading...</div>;
  }
  console.log(props.playlistId);
  return <div>{props.playlistId}</div>;
};

export default PlaylistDetail;
