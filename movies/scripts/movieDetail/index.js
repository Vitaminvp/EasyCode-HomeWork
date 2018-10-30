import config from '../config';
export default function MovieDetail (data) {
    const d = dataMap(data);
    const template = `
        <a href="#" class="back">Back</a>
        <article class="movie">
            <div class="img"><img src='${d.poster_path}' ></div>
            <div class="info">
               <h2>${d.title}</h2>
                <div><strong>${d.date}</strong></div>
                <div class="data">${d.overview}</div>
                <div><strong>${d.popularity}</strong></div>
                <div><strong>${d.language}</strong></div>
                <div><strong>${d.country}</strong></div>
                <div><strong>${d.type}</strong></div>
                <div><strong>${d.status}</strong></div>
                <div><strong>${d.last_air_date}</strong></div>
            </div>
        </article>`;
    const article = document.createElement('ARTICLE');
    const wrapperForMany = document.querySelector('.wrapperForMany');
    const wrapperForOne = document.querySelector('.onemovie');
    article.classList.add('.movie');
    article.innerHTML = template;
    wrapperForMany.style.display =  'none';
    wrapperForOne.appendChild(article);

    const back = document.querySelector('.back');
    back.addEventListener('click', () => {
        wrapperForMany.style.display =  'block';
        wrapperForOne.innerHTML = '';
    })
    // return template;
};
const dataMap = data => ({
    title: data.name || data.original_name || '',
    overview: data.overview,
    type: data.type,
    status: data.status,
    last_air_date: data.last_air_date,
    popularity: data.popularity || '',
    language: data.original_language || '',
    country: data.original_country || '',
    date: data.date || data.release_date || '',
    poster_path:  getImg(data),
    id: data.id
});
const getImg = (data) => {
    const path = data.poster_path?data.poster_path : data.backdrop_path;
    return path ? config.imageUrl + path : config.noImgUrl;
};