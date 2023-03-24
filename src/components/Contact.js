import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full  bg-[#0a192f] flex justify-center items-start px-2'>
        <form method='POST' action={process.env.REACT_APP_GETFROM} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-7'>
                <p className='text-4xl font-bold border-b-2 inline border-green-500 text-gray-300'>Contact</p>
                <p className='py-4 text-gray-300'>//Send me a email </p>
            </div>
            <input className ='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
            <input className ='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows={9} placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-500 hover:border-green-500 px-4 py-3 my-2 flex items-center mx-auto'>Let's Collborate</button>
        </form>
    </div>
  )
}

export default Contact