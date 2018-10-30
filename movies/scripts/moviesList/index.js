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

        data.map(item => {
            const article = document.createElement('ARTICLE');


            article.innerHTML = Movie(item);
            this.fragment.appendChild(article);
        });

    };

    renderToDOM(selector){
        this.selector = selector;
        this.clear(selector);
        selector.appendChild(this.fragment);
    }
    clear(selector){
        selector.innerHTML = '';
    }
    sort(filter){
        const input = document.querySelector('.search-input').value;
        const data = this.data ? [...this.data] : [];
        if (!data.length || !data || !input) return;
        if(filter == 'max'){
            data.sort((a,b) => {
                if(a.popularity < b.popularity) return 1;
                if(a.popularity > b.popularity) return -1;
            })
        }
        if(filter == 'min'){
            data.sort((a,b) => {
                if(a.popularity > b.popularity) return 1;
                if(a.popularity < b.popularity) return -1;
            })
        }
        if(filter == 'new'){
            data.sort((a,b) => {
                if(a.vote_count > b.vote_count) return 1;
                if(a.vote_count < b.vote_count) return -1;
            })
        }
        if(filter == 'old'){
            data.sort((a,b) => {
                if(a.vote_count < b.vote_count) return 1;
                if(a.vote_count > b.vote_count) return -1;
            })
        }
        // console.log("data", data);

        this.createMovieList(data);
        this.renderToDOM(document.querySelector('.movies'));
    }
    hide(){
        this.selector.style.display = 'none';
    }
}