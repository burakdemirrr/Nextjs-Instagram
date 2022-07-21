import React, { useEffect, useState } from 'react'
import Post from "./Post"
import {onSnapshot,collection,query,orderBy} from "@firebase/firestore"
import {db} from "../firebase"
const Posts = () => {
 
  const [posts,setPosts]=useState([]);


  useEffect(()=>{
       onSnapshot(query(collection(db,"posts"),orderBy('timestamp','desc')),snapshot=>{
      setPosts(snapshot.docs)
    });
  },[db])

  return (
    <div>
        {
          posts.map((post)=>(
            <Post key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            caption={post.data().caption}
            img={post.data().image}
            />
          ))
        }
    </div>
  )
}

export default Posts