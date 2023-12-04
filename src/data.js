import { nanoid } from 'nanoid';
import { FaLayerGroup, FaUsers, FaConnectdevelop, FaApple, FaMicrosoft, FaInstagram, FaTwitter } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'Home' },
  { id: nanoid(), href: '#skills', text: 'Servises' },
  { id: nanoid(), href: '#about', text: 'About' },
  { id: nanoid(), href: '#contact', text: 'Contact' },
];

export const services = [
  {
    id: nanoid(),
    title: 'Data Science Acceleration',
    icon: <FaLayerGroup className='h-20 w-20 text-red-400' />,
    text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
  },
  {
    id: nanoid(),
    title: 'Versatility in Application',
    icon: <FaConnectdevelop className='h-20 w-20 text-red-400' />,
    text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
  },
  {
    id: nanoid(),
    title: 'Full Customer Experience Service',
    icon: <FaUsers className='h-20 w-20 text-red-400' />,
    text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
  },
];

export const prides = [
  {
    title: 'Years of Experience',
    count: '10'
  },
  {
    title: 'Business Partners',
    count: '15K'
  },
  {
    title: 'Products Installed',
    count: '25K'
  },
  {
    title: 'Countries World Wide',
    count: '22'
  },
  {
    title: 'Industry Awards',
    count: '5'
  },
]

export const partners = [
  {
    name:'Our Partners',
  },
  {
    name: <FaApple className='w-20 h-20 text-red-400'/>
  },
  {
    name:<FaMicrosoft className='w-20 h-20 text-red-400'/>
  },
  {
    name:<FaInstagram className='w-20 h-20 text-red-400'/>
  },
  {
    name: <FaTwitter className='w-20 h-20 text-red-400'/>
  },

]