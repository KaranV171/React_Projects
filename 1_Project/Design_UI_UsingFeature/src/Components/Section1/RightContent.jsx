import React from 'react'
import RightCard from './RightCard'

const RightContent = ({ users }) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {users.map((e, index) => (
        <RightCard idx={index + 1} img={e.img} tag={e.tag} />
      ))}
    </div>
  )
}

export default RightContent