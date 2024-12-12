import React from 'react'
import Hero_section_first from '../Component/Hero_section_first'
import Hero_secion_second from '../Component/Hero_secion_second'
import Hero_section_third from '../Component/Hero_section_third'
import Slider_section_first from '../Component/Slider_section_first'
import Category_section from '../Component/Category_section'

const Main = () => {
  return (
    <div className='px-[100px] pt-5 bg-white'>
      <Hero_section_first />
      <Hero_secion_second />
      <Hero_section_third />
      <Slider_section_first />
      <Category_section />
    </div>
    
  )
}

export default Main