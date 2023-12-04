import React from 'react'

const ServiceCard = ({ title, icon, text }) => {
    return ( 
        <div className=' h-96 w-full flex items-center md:items-start flex-col justify-evenly p-5 rounded-lg hover:shadow-lg backdrop-blur-sm bg-dark-100'>
            <div className='mb-4'>
                {icon}
            </div>
            <div className='text-center md:text-left' >
                <h3 className=' text-3xl font-bold mb-2 text-blue-400'>{title}</h3>
                <p className='text-xl text-gray-500'>{text}</p>
            </div>
        </div>
    )
}

export default ServiceCard
