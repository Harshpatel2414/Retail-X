import React from 'react'

const SectionTitle = ({title,para}) => {
    return (
        <div className='text-center md:text-left md:w-full lg:w-3/4'>
            <h1 className='text-4xl lg:text-7xl font-bold mb-4 text-gray-200'>{title}</h1>
            <p className='text-xl lg:2xl text-gray-300'>{para}</p>
        </div>
    )
}

export default SectionTitle
