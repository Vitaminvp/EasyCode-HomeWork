import config from './config';

const getVideoByText = text => {
    if(!text){
        return;
    }
    return fetch(config.url + text).then(res => res.json())
        ;
};

export  default {
    getVideoByText
}