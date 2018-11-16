import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            promoted: [],
            data: []
        };
    }

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
            .then(res => res.json())
            .then(posts => this.setState({promoted: Object.keys(posts.Promoted).map(key => posts.Promoted[key])}));
        fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
            .then(res => res.json())
            .then(posts => this.setState({data: Object.keys(posts.Data).map(key => posts.Data[key])}))
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
                    {this.state.data.map(post => {
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
                <div className="commentBox">
                    <ReactPaginate previousLabel={"previous"}
                                   nextLabel={"next"}
                                   breakLabel={"..."}
                                   breakClassName={"break-me"}
                                   pageCount={this.state.pageCount}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
                </div>
            </div>
        )
    }
};
export default News;
