import React from 'react'
import { prides } from '../data'

const Prides = () => {
    return (
        <div className=' bg-bgblue bg-bottom bg-no-repeat bg-cover h-[81rem] md:h-[51rem]'>
            <div className='flex md:pt-20  flex-col px-5 py-10 gap-10 items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-100'>We Take Pride in Our Numbers</h1>
                {/* prides  */}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-10 auto-cols-auto'>
                    {prides.map((pride, i) => {
                        let { title, count } = pride;
                        return (<div key={i} className='flex items-center flex-col text-center border-b-4 border-gray-700 h-32 justify-around w-full last:col-span-2 md:last:col-span-1'>
                            <span className=' text-red-400 text-5xl font-semibold'>{count}</span>
                            <p className='text-md md:text-lg text-gray-400'>{title}</p>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Prides
