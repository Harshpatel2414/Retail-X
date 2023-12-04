import React from 'react'
import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'
import { services } from '../data'

const Services = () => {
  return (
    <div className='py-20 px-5 bg-dark-300 flex flex-col gap-20'>
      <div className='md:px-20'>
        <SectionTitle title='Let Your Data Take Your Business to Higher Grounds' para='Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.' />
      </div>

      {/* services */}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center md:px-20 mt-10'>
        {/* service cards */}
        {services.map((serv) => {
          let { title, icon, text, id } = serv;
          return (<ServiceCard key={id} title={title} icon={icon} text={text} />)
        })}
      </div>
    </div>
  )
}

export default Services
