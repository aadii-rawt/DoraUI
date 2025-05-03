import React from 'react'

const EmptyData = () => {
  return (
    <div className='flex items-center justify-center flex-col h-80 w-full gap-5'>
      <img src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" alt="" />
      <div>
        
      </div>
      <h1 className='text-2xl font-medium'>No Post Created Yet</h1>
      <p className='text-center text-gray-400'>Looks like you haven't made any posts yet. Don't worry, just click the <br /> 'Create' button and let the universe know you're out there.</p>

      <button className="bg-blue-500 px-3 py-1.5 rounded-md">Create Now</button>
    </div>
  )
}

export default EmptyData