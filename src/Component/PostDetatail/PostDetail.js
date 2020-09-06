import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Comment from '../Comment/Comment';



const PostDetail = () => { 

    
        const {postId} = useParams();
        //amra object pabo api theke. tai default value dilam empty object
        const [postData, setPost] = useState([]); 
        const {title, body, id  } = postData;
        const [comment, setComment] = useState([]);
        
        useEffect(() => {
            const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
            fetch(url)
                .then(res => res.json())
                .then(data => setPost(data))
        }, [postId]);
      
        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(res => res.json())
                .then(data => setComment(data))
        }, []);
        const postDetailStyle ={
            border: '1px solid gray',
            margin : '10px',
            borderRadius : '10px',
            padding: '10px'
    
        }

        
    return (
        <div>
            <h1 align="center" >Post Details</h1>
        <div style ={postDetailStyle}>
            <h2>Post Title : {title}</h2>
            <h3>Details: {body}</h3>
        </div>
        <div>
                {
                    comment.map(comment => <Comment comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default PostDetail;