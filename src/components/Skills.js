import React from 'react'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Spring from '../assets/springboot.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl border-b-2 border-green-500 inline font-bold'>Skills</p>
                <p className='py-4'>//There are the technolgies i've worked with</p>
            </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt='Github' />
                <p className='my-4'>Github</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Javascript} alt='Github' />
                <p className='my-4'>Javascript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Spring} alt='Github' />
                <p className='my-4'>SpringBoot</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt='Github' />
                <p className='my-4'>React</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Skills