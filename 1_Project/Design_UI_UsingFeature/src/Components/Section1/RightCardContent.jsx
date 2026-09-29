import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div>
                <p className='text-xl  leading-relaxed text-white mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nesciunt expedita quas? Laboriosam, molestiae assumenda?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-3 py-3 rounded-full text-lg'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-3 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent