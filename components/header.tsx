import { inter } from '@/app/layout'
import Link from 'next/link'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { PiUser } from 'react-icons/pi'

function Header() {
  return (
    <div className={`${inter.className} text-textColor bg-bg`}>
      <div>
        <h5 className='font-bold text-2xl'>Food<span className='text-primary3'>tuck</span></h5>
      </div>
      <div className='flex gap-8'>
        <ul>
            <li className='hover:text-primary3'>Home</li>
            <li><Link href={'/menu'}>Menu</Link></li>
            <li>Blog</li>
            <li>Pages</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='flex gap-4'>
      <FiSearch color='#FFFFFF' size={24} />
      <PiUser/>
      <LiaShoppingBagSolid size={24} color='#FFFFFF' className='self-center ' />
      </div>
    </div>
  )
}

export default Header
