import React from 'react'
import Post from "./Post"
const Posts = () => {
  const posts=[{
    id:123,
    username:"burakdeniro",
    userImg:"https://links.papareact.com/3ke",
    img:"https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2022/04/24/919596-1609227599.jpg?itok=9JXfvs__",
    caption:"This is a caption",

  }]


  return (
    <div>
        {
          posts.map((post)=>(
            <Post key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            caption={post.caption}
            img={post.img}
            />
          ))
        }
    </div>
  )
}

export default Posts