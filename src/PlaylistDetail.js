import React from "react";

const PlaylistDetail = ({ playlistId }) => {
  if (!playlistId) {
    return <div>Loading...</div>;
  }
  // console.log(playlistId);
  return <div>What is this?</div>;
};

export default PlaylistDetail;
