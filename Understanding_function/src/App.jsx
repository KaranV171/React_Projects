import React from 'react'

const App = () => {
  const handleFunction = (val) => {
    console.log(val)
  }
  return (
    <div>
      <button onClick={(ele)=>{
        handleFunction(ele)
      }}>Button</button>
    </div>
  )
}

export default App