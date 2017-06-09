import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({videos, onVideoSelected}) => {

  const videoItems = videos.map((item) => {
    return <VideoItem onVideoSelect={onVideoSelected} key={item.etag} video={item} />
  });

  return (
    <ul className="col-md-4 list-group">{videoItems}</ul>
  );
}

export default VideoList;