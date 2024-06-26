import axios from 'axios';

export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

const fetchTopAlbums = async () => {
    const url = `${BACKEND_ENDPOINT}/albums/top`;
    try {
        const topAlbumsResponse = await axios.get(url);
        return topAlbumsResponse.data;
    } catch (error) {
        console.log(error);
    }
}

const fetchNewAlbums = async() => {
    const url = `${BACKEND_ENDPOINT}/albums/new`;
    try {
        const newAlbumsResponse = await axios.get(url);
        return newAlbumsResponse.data;
    } catch (error) {
        console.log(error);
    }
}

export {fetchNewAlbums, fetchTopAlbums};