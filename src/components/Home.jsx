import React from 'react'
import SectionTitle from './SectionTitle'

const Home = () => {
    return (
        <div className='flex flex-col items-center md:items-start px-5 w-full h-full bg-bg gap-10 justify-center md:px-20 py-36 bg-fixed bg-cover bg-no-repeat'>
            <SectionTitle title='The New Standard in Data Analysis '
                para='Use Data to Get a 360-Degree View of Your Business' />
            <span className='btn'>Learn More</span>
        </div>
    )
}

export default Home
