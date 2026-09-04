import React from 'react'
import Navigation_bar from './Navigation_bar'
import Content1 from './Content1'

const Section1 = (props) => {
  return (
    <div >
      <Navigation_bar />
      <Content1 users={props.users}/>

    </div>
  )
}

export default Section1