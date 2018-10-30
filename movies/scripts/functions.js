import config from './config';

const getVideoByText = text => {
    if(!text){
        return;
    }
    return fetch(config.url + text).then(res => res.json());
};
const getMovieById = (id) => {
    const url = `${config.movieUrl}${config.queryMovieById}${id}${config.apiKey}`;
    if(!id){
        return;
    }
    return fetch(url).then(res => res.json());
};
export  default {
    getVideoByText,
    getMovieById
}