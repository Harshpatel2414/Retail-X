import React from 'react'
import { links } from '../data'

const Navlinks = ({setMenu}) => {
    return (
        <nav>
            <ul className="navBtn flex flex-col md:flex-row justify-evenly gap-5">
                {links.map((link) => {
                    let { text, href, id } = link;
                    return (<li key={id} className='hover:text-red-300'>
                        <a onClick={()=>setMenu(false)} href={href}>{text}</a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navlinks
