import React, {Component} from 'react';


class Exchange extends Component{
    constructor(){
        super();
        this.state={
            posts: []
        };
    }
    componentDidMount(){
        const post = {
        title: 'Test title',
        body: 'Test body',
        userId: 1
        };
        this.setPost(post);
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => this.setState({posts}))
    }

    setPost = (post) => {
        const options = {
            method: "PUT",
            body: JSON.stringify(post),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        return  fetch('http://jsonplaceholder.typicode.com/posts', options)
            .then(res => res.json())
            .then(posts => console.log("posts", posts))
            .catch(error => console.error("Error:", error))
    }
    render(){

        return (
            <div>
                <h1>Exchange</h1>
                {this.state.posts.map(post => <p key={post.id}>{post.userId}: {post.title}</p>)}
            </div>
        )
    }

};
export default Exchange;
