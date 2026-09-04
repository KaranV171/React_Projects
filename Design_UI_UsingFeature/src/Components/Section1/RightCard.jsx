import React from 'react'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 bg-white overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img}></img>
        <div className='h-full w-full absolute top-0 left-0  p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.idx}</h2>
            <RightCardContent tag={props.tag}/>
        </div>
    </div>
  )
}

export default RightCard