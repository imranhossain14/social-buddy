import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const AllPost = (props) => {

    const {title, id, body} = props.post;
    const postStyle ={
        border: '1px solid gray',
        margin : '10px',
        borderRadius : '10px',
        padding: '10px'

    }

    return (
       
        <div style={postStyle}>
            {
                <h3> {title}</h3>
                 
            }
           
            
            <Link to={`/posts/${id}`}>
                     <Button variant="contained" color="primary">Show Details</Button>
             </Link>
        </div>
    );
};

export default AllPost;