import React, {Component} from 'react';
import './News.css';

class News extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
            .then(res => res.json())
            .then(posts => this.setState({posts: Object.keys(posts.Data).map(key => posts.Data[key])}))
    }

    render() {
        console.log("this.state.posts", this.state.posts);
        return (
            <div>
                <h1>News</h1>
                {this.state.posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h2><a href={ post.guid } target="_blank">{post.title}</a></h2>
                            <div className="newsItem">
                                <div className="newsImgBox">
                                    <img src={post.imageurl} alt=""/>
                                </div>
                                <div className="newsTestBox">
                                    <p>{new Date(post.published_on).toLocaleDateString()}</p>
                                    <p>{post.source}</p>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
};
export default News;
