import React from 'react'
import { useState } from 'react'
const App = () => {
  const [nums, setNums] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Welcome to my Page</h1>
      <h2 className="subtitle">
        THE GAME OF INCREASE AND DECREASE
        </h2>
      <div className="counter-box">
        <h3 className="number">{nums}</h3>
        <div className="buttons">
          <button className="button increase" onClick={()=>{
            setNums(nums+1)
          }}>Increase</button>
          <button className="button decrease" onClick={()=>{
            setNums(nums-1)
          }}>Decrease</button>
        </div>
      </div>
    </div>
  )
}

export default App