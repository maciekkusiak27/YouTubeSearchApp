import axios from 'axios';
const KEY = 'AIzaSyAQC-x4FWPEmKSm-hmm8gPiN1JuwCusRMY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet' || 'statistics', 
            maxResults: 10,
            key: KEY
        },
        headers:{}
})