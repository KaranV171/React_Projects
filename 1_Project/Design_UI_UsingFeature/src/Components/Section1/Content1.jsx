import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content1 = (props) => {
  return (
    <div className=' pt-8 pb-10 flex gap-5 items-center h-[90vh] '>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Content1