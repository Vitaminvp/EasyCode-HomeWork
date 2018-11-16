import React from 'react';
import Pagination from './Pagination';
import './Pagination/index.css';

class NewsComponent extends React.Component {
    constructor() {
        super();

        // an example array of 150 items to be paged
        var exampleItems = [...Array(150).keys()].map(i => ({id: (i + 1), name: 'Item ' + (i + 1)}));

        this.state = {
            articles: [],
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
            .then(res => res.json())
            .then(posts => this.setState({articles: Object.keys(posts.Data).map(key => posts.Data[key])}));
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>News</h1>
                        <div className="posts">
                            {this.state.pageOfItems.map(post =>
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
                            )}
                        </div>
                        <Pagination items={this.state.articles} onChangePage={this.onChangePage}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsComponent;