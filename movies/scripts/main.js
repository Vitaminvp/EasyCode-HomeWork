import MoviesList from './moviesList/index.js';
import MovieDetail from './movieDetail';
import functions from './functions';

const input = document.querySelector('.search-input');
const movies = document.querySelector('.movies');
const list = new MoviesList();
const filters = document.querySelector('.filters');

input.addEventListener('input', (e) => {
    const searchText = e.target.value;
    if(!searchText){
        list.clear(movies);
        return;
    }
    functions.getVideoByText(searchText)
        .then(result => {
            list.createMovieList(result.results);
            list.renderToDOM(movies)
        })
});

filters.addEventListener('click', (e) => {
    e.preventDefault();
    const dataAttr = e.target.getAttribute('data-filter');
    if(!dataAttr) return;
    list.sort(dataAttr);
});

movies.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    const link = target.closest('.movieLink');
    if(!link) return;
    const id = link.getAttribute('href');
    functions.getMovieById(id)
        .then(res => MovieDetail(res))
});
