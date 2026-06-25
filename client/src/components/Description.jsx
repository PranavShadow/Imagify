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
            Generate images from text prompts using an AI image generation API integrated into the application. The platform handles authentication, credit management, and a streamlined user experience around the image generation workflow
          </p>
          <p className='text-gray-600'>
            Imagify is a full-stack MERN application that enables users to generate AI images from text prompts through the ClipDrop API, with built-in authentication, credit management, and payment integration
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
