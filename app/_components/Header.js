import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='flex justify-between mx-5'>
        <div className='logo'>
            <Image 
            alt="Logo" 
            src="https://static.vecteezy.com/system/resources/previews/008/480/737/non_2x/burger-icon-simple-colored-burger-icon-fast-food-logo-free-png.png"
            width={120}
            height={120}
            />
        </div> 
        <div className='mt-10'>
            <ul className='flex items-center gap-x-5'>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">Login/SignUp</Link>
                </li>
                <li>
                    <Link href="#">Profile</Link>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Header