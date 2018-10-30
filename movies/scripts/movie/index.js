import config from '../config';
export default function Movie (data) {
    const d = dataMap(data);
    const template = `
        <article class="movie">
        <a href="${data.id}" class="movieLink"><div class="img"><img src='${d.poster_path}' ></div></a>
            <div class="info">
                <a href="${data.id}" class="movieLink"><h2>${d.title}</h2></a>
                <div><strong>${d.date}</strong></div>
                <div class="data">${d.overview}</div>
                <div><strong>${d.popularity}</strong></div>
                <div><strong>${d.language}</strong></div>
                <div><strong>${d.country}</strong></div>
            </div>
        </article>`;
    return template;
};
const dataMap = data => ({
    title: data.name || data.original_name || '',
    overview: data.overview,
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