import React from 'react';

const  VideoItem = ({video, onVideoSelect}) => {
  return (
    <li onClick={item => onVideoSelect(video)} className="video-item list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>

    );
}

export default VideoItem;