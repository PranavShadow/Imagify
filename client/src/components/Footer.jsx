import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={assets.logo} width={150} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Checkout more such Projects at pranavgg.me</p>
      <div className='flex gap-2.5 '>
        <a href="https://github.com/PranavShadow"><img width={35} src={assets.github_icon} alt="" className='cursor-pointer' /></a>
        <a href="https://www.linkedin.com/in/pranavgg/"><img width={35} src={assets.linkedin_icon} alt="" className='cursor-pointer' /></a>
        <a href="https://x.com/pranavvgg"><img width={35} src={assets.x_icon} alt="" className='cursor-pointer'/></a>
       </div>
    </div>
  )
}

export default Footer
