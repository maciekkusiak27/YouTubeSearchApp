import React from 'react';

const ListElem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='minivideo'>
            
            <img className='img' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>

            <div className='content'>
               
               <strong>{video.snippet.title}</strong><br/>

               <p>Kanał: {video.snippet.channelTitle}. Opublikowano: {video.snippet.publishedAt}</p>
               <p><i>
                    {video.snippet.description}
                    </i>
               </p>
            </div>
        </div>
    )
};
export default ListElem;