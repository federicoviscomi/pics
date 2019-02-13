import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9cfe0e0d766c4763b36a59dd0365e755a12e42792de9dd5a6214875c59e6da92'
    }
});
