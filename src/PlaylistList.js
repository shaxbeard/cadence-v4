import React from "react";
import PlaylistItem from "./PlaylistItem";

const PlaylistList = ({ userPlaylists, onPlaylistSelect }) => {
  const renderedList = userPlaylists.map(playlist => {
    return (
      //Here we are passing the entire playlist object
      //down to the PlaylistItem component
      //with <PlaylistItem playlist={playlist} />
      <PlaylistItem onPlaylistSelect={onPlaylistSelect} playlist={playlist} />
    );
  });

  return <div>{renderedList}</div>;
};

export default PlaylistList;
