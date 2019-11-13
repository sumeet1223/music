import React from "react";
export const MusicComponent = props => (
  <div className="music-item-container d-flex flex-row my-3 p-3 mr-3">
    <div className="media text-muted">
      <img src={props.musicItem.artworkUrl60} alt="" className="mr-2 rounded" />
    </div>
    <div className="d-flex flex-column">
      <span className="border-bottom border-gray pb-2 mb-0">
        Collection Name - {props.musicItem.collectionName}
      </span>
      <span className="border-bottom border-gray pb-2 mb-0 mt-2">
        Genre - {props.musicItem.primaryGenreName}
      </span>
      <span className="flex-md-row-reverse d-flex mt-2">
        More...
      </span>
    </div>
  </div>
);
