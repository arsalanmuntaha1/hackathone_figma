import { inter } from '@/app/layout'
import React from 'react'
import Header from './header'
import { PiCaretRightBold } from 'react-icons/pi'

function OurMenu() {
  return (
    <div className={`${inter.className} bg-[url-(/assets/menubg.svg)] text-textColor`}>
      <div>
        <Header/>
      </div>
      <div className='py-[108px] text-center'> 
        <h2 className='text-5xl font-bold'>Our Menu</h2>
        <div>
            <p className='text-xl'>Home</p>
            <PiCaretRightBold />
            <p className='text-xl text-primary3'>Menu</p>
        </div>
      </div>
    </div>
  )
}

export default OurMenu
