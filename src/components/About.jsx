import React from 'react'

const About = () => {
  return (
    <div className='grid md:grid-cols-2 -my-1 items-center justify-center px-5 bg-dark-300 py-5 h-fit lg:px-24 mx-auto'>
      <div className='bg-bg bg-no-repeat bg-cover aspect-square flex items-center justify-center md:border-2 border-gray-600 md:border-r-0'>
           <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-100'>Unprecedented Velocity.<br/> Impeccable Reliability.</h1>
      </div>
      <div className='flex justify-center  flex-col gap-5 items-center md:items-start md:text-left md:px-10 lg:px-20 py-5 text-center text-xl text-gray-400 md:border-2 border-gray-600 h-full'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, veniam magni! Quibusdam suscipit atque vero optio laborum amet quam pariatur ut facilis alias velit architecto, eveniet esse corrupti accusamus ullam mollitia soluta iusto ?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, veniam magni! Quibusdam suscipit atque vero optio laborum amet quam pariatur ut facilis alias velit architecto, eveniet esse corrupti accusamus ullam placeat quas magnam dolorum, nobis consectetur omnis?</p>
        <button className='btn'>Learn More</button>
      </div>
    </div>
  )
}

export default About
