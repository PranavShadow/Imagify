import React from 'react'
import {assets} from '../assets/assets'


const Description = () => {
  return (
    <div  className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8 '>Turn Your Imagination into Visuals</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounde-lg '/>
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur consequuntur maxime nemo quis cupiditate perspiciatis molestiae harum odio autem, quam porro alias cumque maiores, non sapiente similique accusamus? Earum corrupti necessitatibus molestias! Laboriosam vitae error nesciunt molestias cupiditate consequuntur eum totam sit harum eligendi, iste, eius nisi itaque voluptas! 
          </p>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat nam quos harum facere ipsum autem similique cum possimus at aperiam distinctio, impedit perspiciatis velit dolorem provident tempora. Porro placeat facilis natus iure debitis labore quod. Labore nesciunt adipisci fugiat?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
