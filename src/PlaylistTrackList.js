import React from "react";

const PlaylistTrackList = props => {
  const tracks = props.tracks.map(track => {
    return <div>{track.track.name}</div>;
  });

  return <div>{tracks}</div>;
};

export default PlaylistTrackList;
