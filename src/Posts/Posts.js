// import axios from 'axios';
// import { useEffect,useState } from 'react';
// import './Posts';

// export default function Posts() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios
//         .get("https://jsonplaceholder.typicode.com/post/10")
//         .then((reponse) => setPosts(reponse.data));
//     },[]);

//     return (
//         <div className='posts'>
//             <h1>Posts de blog</h1>
//             <ul>
//                 {posts.map((posts)) => }
//             </ul>
//         </div>
//     )
// }

import axios from "axios";
import { useEffect, useState } from "react";
import "./Posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
      .then((reponse) => setPosts(reponse.data));
  }, []);

  return (
    <div className="post">
      <h1>Posts de blogs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
