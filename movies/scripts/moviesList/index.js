import Movie from '../movie'
export default class MoviesList{
    constructor(data){
        this.data = data;
        this.createMovieList();
    }

    createMovieList(data){
        this.data = data;
        if(!data) return;
        this.fragment = document.createDocumentFragment();

        data.results.map(item => {
            const article = document.createElement('ARTICLE');


            article.innerHTML = Movie(item);
            this.fragment.appendChild(article);
        });

    };

    renderToDOM(selector){
        this.clear(selector);
        selector.appendChild(this.fragment);
    }
    clear(selector){
        selector.innerHTML = '';
    }
}