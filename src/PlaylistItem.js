import React from "react";

const PlaylistItem = ({ playlist, onPlaylistSelect }) => {
  return <div onclick={() => onPlaylistSelect(playlist)}>{playlist.name}</div>;
};

export default PlaylistItem;
