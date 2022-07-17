import React, { useEffect, useState } from 'react'
import faker from "faker"
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.cotextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);

    console.log(suggestions);
  }, [])


  return (
    <div>
      {
        suggestions.map((profile) => (
          <Story key={profile.id} img={profile.avatar} username={profile.username} />
        ))
      }
    </div>
  )
}

export default Stories