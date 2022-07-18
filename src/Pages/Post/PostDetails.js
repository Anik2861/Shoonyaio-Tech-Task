import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { postId } = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])
    return (
        <div>
           <p> This is post  details for : {postId}</p>
           <h1>Title: {post.title}</h1>
           <p> {post.body}</p>
        </div>
    );
};

export default PostDetails;