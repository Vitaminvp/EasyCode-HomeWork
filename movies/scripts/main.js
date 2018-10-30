import MoviesList from './moviesList/index.js';
import functions from './functions';

const input = document.querySelector('.search-input');
const movies = document.querySelector('.movies');
const list = new MoviesList();

input.addEventListener('input', (e) => {
    const searchText = e.target.value;
    if(!searchText){
        list.clear(movies);
        return;
    }
    functions.getVideoByText(searchText)
        .then(result => {
            list.createMovieList(result);
            list.renderToDOM(movies)
        })
});