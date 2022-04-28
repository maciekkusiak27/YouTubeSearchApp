import axios from 'axios';
const KEY = 'mykey'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet' || 'statistics', 
            maxResults: 10,
            key: KEY
        },
        headers:{}
})