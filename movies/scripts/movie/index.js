import config from '../config';
export default function Movie (data) {
    const d = dataMap(data);
    const template = `
        <article class="movie">
            <div class="img"><img src='${d.poster_path}' ></div>
            <div class="info">
                <h2>${d.title}</h2>
                <div class="data">${d.overview}</div>
                <div><strong>${d.popularity}</strong></div>
            </div>
        </article>`;
    return template;
};
const dataMap = data => ({
    title: data.name || data.original_name || '',
    overview: data.overview,
    popularity: data.popularity,
    poster_path:  getImg(data),
    id: data.id
});
const getImg = (data) => {
    const path = data.poster_path?data.poster_path : data.backdrop_path;
    return path ? config.imageUrl + path : config.noImgUrl;
};