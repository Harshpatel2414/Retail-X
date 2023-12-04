import React from 'react'
import { partners } from '../data'

const Partners = () => {
    return (
        <div className='-mt-60 bg-dark-300 flex flex-col md:grid px-5 md:grid-cols-5 md:grid-rows-4 justify-items-center items-center lg:w-4/5 mx-auto gap-10'>
            <div className=' col-span-5 flex flex-col md:flex-row justify-around w-full border-2 border-gray-600'>
                {partners.map((item, i) => {
                    let { name } = item
                    return (<div key={i} className='h-32 md:h-40 flex items-center justify-center text-3xl text-gray-200  w-full border-b-2 md:border-r-2 border-gray-600'>
                        {name}
                    </div>)
                })}
            </div>
            <div className='bg-bg bg-no-repeat bg-cover h-96 md:h-full w-full flex items-center justify-center col-span-3 row-span-3 md:px-5'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-100'>Are You Ready to Accelerate Your Business?</h1>
            </div>
            <div className='flex justify-center  flex-col gap-5 items-center md:items-start md:text-left md:px-10 lg:px-20 py-5 text-center text-xl text-gray-400 h-full col-span-2 row-span-3'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, veniam magni! Quibusdam suscipit atque vero optio laborum amet quam pariatur ut facilis alias velit architecto, eveniet esse corrupti accusamus ullam mollitia soluta iusto ?</p>
                <button className='btn'>Learn More</button>
            </div>
        </div >
    )
}

export default Partners
