import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>At Forever, we believe that fashion is more than just clothing—it's an expression of who you are.Our designs are crafted with the finest materials, combining comfort, style, and sustainability.We are committed to ethical practices, ensuring our products are made with care for both people and the planet.Experience the perfect blend of innovation and tradition, tailored just for you at Forever.</p>
           <p>From timeless classics to bold new trends, we offer something for every individual.With Forever, you don't just wear fashion—you live it.Join us in redefining style with purpose, where every piece tells a story.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>We are on a mission to redefine fashion with purpose, creating clothing that not only looks good but does good for the world.We believe in empowering communities, sourcing responsibly, and supporting fair trade practices in every step of our journey.Our clothing is not just fashion—it's a movement towards a more conscious and inclusive world.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We maintain strict quality control processes to ensure that each garment meets our high standards for fabric durability, stitching, and overall construction.Our rigorous quality assurance procedures guarantee that every product delivered to our customers is free from defects, ensuring long-lasting wear and comfort.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>we prioritize clothing convenience to ensure our employees feel comfortable and confident throughout the workday. Our attire is designed for ease of wear and care, allowing for seamless transitions between tasks.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>we pride ourselves on delivering a seamless shopping experience, with personalized attention to your every need.We believe in going the extra mile, offering exceptional after-sales support to guarantee your complete satisfaction.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
