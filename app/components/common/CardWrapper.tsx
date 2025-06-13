import React from 'react'

const CardWrapper = ({ children } : {  children: React.ReactNode }) => {
  return (
    <div className='p-6 bg-white/10 backdrop-blur-xs'>
      {children}
    </div>
  )
}

export default CardWrapper