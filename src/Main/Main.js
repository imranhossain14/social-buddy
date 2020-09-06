import React, {useEffect, useState} from 'react';
import Header from '../Component/Header/Header';
import AllPost from '../Component/AllPost/AllPost';

const Main = () => {
const [allPost, setAllPost] = useState([]);
useEffect(()=>{
     const url = 'https://jsonplaceholder.typicode.com/posts';
     fetch(url)
     .then(response => response.json())
     .then(data =>setAllPost(data))
     
 },[])
    return (
        <div>
              <Header></Header>
              <h1 style={{ textAlign: "center" }}>Total Posts: {allPost.length}</h1>
                {
                    allPost.map(postdata => <AllPost key={postdata.id} post= {postdata} ></AllPost>)
                    
                }
                
        </div>
    );
};

export default Main;