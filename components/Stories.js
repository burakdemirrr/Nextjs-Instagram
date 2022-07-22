import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from "./Story"
import { useSession } from 'next-auth/react';
import { users } from '../users';
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const {data:session}=useSession();
  const userData=users;

  console.log(userData)

  return (
    <div className='flex space-x-2 p-6 bg-white
    mt-8 border-gray-200 border rounded-sm overflow-x-scroll
    scrollbar-thumb-black
    '>
      {
      session && (
        <Story img={session.user.image} username={session.user.name}/>
      )
    }
      {
        userData.map((profile) => (
          <Story key={profile.id} img={profile.img} username={profile.username} />
        ))
      }
    </div>
  )
}



export default Stories