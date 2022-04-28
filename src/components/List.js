import React from 'react';
import ListElem from './ListElem';

const List = ({videos , handleVideoSelect}) => {
    const videosList =  videos.map((video) => {
        return <ListElem 
        key={video.id.videoId} 
        video={video} 
        handleVideoSelect={handleVideoSelect} />
    });

    return <div>{videosList}</div>
};
export default List;