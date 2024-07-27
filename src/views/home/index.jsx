import React, { memo, useEffect, useState } from "react";
import mlRequest from '@/services/index'

const Home = memo(() => {
  const [highScore, setHighscore] = useState({})
  // 网络请求
  useEffect(() => {
    mlRequest.get({url: "/home/highscore"}).then(res => {
      console.log(res)
      setHighscore(res)
    })
  },[])


  return (
    <div>
      <h1>Hoome</h1>
      <h2>{ highScore.title }</h2>
      <h4>{ highScore.subtitle }</h4>
      <ul>
        {
          highScore.list?.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home
