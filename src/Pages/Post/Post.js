import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])


    return (
        <div>
            <h1>Every post ever had {post.length}</h1>
            {
                post.map(p => <Link
                    key={p.id}
                    to={`/post/${p.id}`}
                >{p.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;