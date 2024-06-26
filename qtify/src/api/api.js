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

const fetchSongs = async() => {
    const url = `${BACKEND_ENDPOINT}/songs`;
    try {
        const songsResponse = await axios.get(url);
        return songsResponse.data;
    } catch (error) {
        console.log(error);
    }
};

const fetchGenres = async() => {
    const url = `${BACKEND_ENDPOINT}/genres`;
    try {
        const genresResponse = await axios.get(url);
        return genresResponse.data;
    } catch (error) {
        console.log(error);
    }
}

export {fetchNewAlbums, fetchTopAlbums, fetchSongs, fetchGenres};