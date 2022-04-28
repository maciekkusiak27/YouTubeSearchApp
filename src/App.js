import React, { useState } from 'react';
import Search from './components/Search';
import youtube from './apis/youtube';
import List from './components/List';
import Video from './components/Video';
import './App.css';

const App = () =>{

const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);

   const handleSubmit = async (termFromSearch) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearch,
            }
        })

        setVideos(response.data.items);
        setSelectedVideo(null)
    };
   const handleVideoSelect = (video) => {
        setSelectedVideo(video)
    }

   
        return (
            <div className='app'>
                <Search handleFormSubmit={handleSubmit}/>

                <div>
                    {selectedVideo ? 
                    <div className="chosen">
                    <Video 
                    video={selectedVideo}/> </div> 
                    :   
                <div className="list">
                <List 
                handleVideoSelect={handleVideoSelect} 
                videos={videos}
                />
                        </div>}
             </div>                     
               
            </div>
        )
    }


export default App;