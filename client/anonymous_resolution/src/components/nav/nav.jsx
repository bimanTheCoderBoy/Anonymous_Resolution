import React from 'react'

export default function Nav({title}) {
  return (
    <>
    <div className='dark:bg-slate-900 h-16 fixed left-0 right-0 flex justify-center items-center shadow-lg'>
     <h1 className='text-xl font-mono font-medium text-[#0EBCB2] dark:text-white'> {title}</h1>
    </div>
</>
  )
}

