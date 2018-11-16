import React, {Component} from 'react';
import './News.css';

class News extends Component {
    constructor() {
        super();
        this.state = {
            promoted: [],
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
            .then(res => res.json())
            .then(posts => this.setState({promoted: Object.keys(posts.Promoted).map(key => posts.Promoted[key])}));
        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
            .then(res => res.json())
            .then(posts => this.setState({posts: Object.keys(posts.Data).map(key => posts.Data[key])}))
    }

    render() {
        return (
            <div>
                <h1>News</h1>
                {this.state.promoted.map(post => {
                    return (
                        <div key={post.id}>
                            <h2><a href={post.guid} target="_blank" rel="noopener noreferrer">{post.title}</a></h2>
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
                <div className="posts">
                    {this.state.posts.map(post => {
                        return (

                            <div key={post.id} className="post">
                                <h2><a href={post.guid} target="_blank" rel="noopener noreferrer">{post.title}</a></h2>
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
            </div>
        )
    }
};
export default News;
