import React from 'react'
import { FaDrupal } from 'react-icons/fa'

const Logo = () => {
    return (
        <div className="logo flex gap-4 items-center">
            {/* <img src="" alt="R" /> */}
            <FaDrupal className='w-10 h-10 text-red-300'/>
            <span><a href="/">Retail-X</a></span>
        </div>
    )
}

export default Logo
