import React from "react";

const PlaylistItem = ({ playlist, onPlaylistSelect }) => {
  // console.log(playlist);
  return <div onClick={() => onPlaylistSelect(playlist)}>{playlist.name}</div>;
};

export default PlaylistItem;
