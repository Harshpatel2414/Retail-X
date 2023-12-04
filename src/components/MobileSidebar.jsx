import React from 'react'
import { FaUser } from 'react-icons/fa'
import Navlinks from './Navlinks'

const MobileSidebar = ({setMenu}) => {
    return (
        <div className='mobileMenu md:hidden bg-dark-100'>
            <span className='absolute top-10 right-10 font-bold md:hidden text-xl text-red-400' onClick={() => setMenu(false)}>X</span>
            <Navlinks setMenu={setMenu} />
            <div className="userLogin flex gap-2 items-center text-red-400">
                <div className=' flex rounded-full h-8 w-8 border-2 border-red-400 items-center justify-center' >
                    <FaUser />
                </div>
                <span>Log In</span>
            </div>
        </div>
    )
}

export default MobileSidebar
