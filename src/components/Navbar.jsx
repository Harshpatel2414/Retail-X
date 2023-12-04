import React, { useState } from 'react'
import Logo from './Logo';
import { FaBars, FaUser } from 'react-icons/fa';
import Navlinks from './Navlinks';
import MobileSidebar from './MobileSidebar';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className='flex items-center h-24 justify-around bg-dark-300 text-lg text-gray-200'>
            <Logo />
            <div className='flex gap-10'>
                {menu && <MobileSidebar setMenu={setMenu} />}
                <div className='hidden md:relative md:h-auto md:w-auto md:bg-transparent md:flex md:flex-row md:items-center gap-10'>
                    <span className='absolute top-10 right-10 font-bold md:hidden text-xl' onClick={() => setMenu(false)}>X</span>
                    <Navlinks setMenu={setMenu} />
                    <div className="userLogin flex gap-2 items-center text-red-400">
                        <div className=' flex rounded-full h-8 w-8 border-2 border-red-400 items-center justify-center' >
                            <FaUser />
                        </div>
                        <span>Log In</span>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <a href='/' className='px-5 py-2 ring-2 ring-white hover:ring-red-400 hover:text-red-400 rounded-xl ring-inset text-white'>Get Started</a>
                    <FaBars className='md:hidden w-8 h-8' onClick={() => setMenu((prev) => !prev)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
