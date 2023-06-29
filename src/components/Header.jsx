import React from 'react'
import "../styles/style.css"

const Header = () => {
  return (
    <nav className='  w-full py-4 px-2  h-16 mx-auto text-white '>
          <ul className=' flex space-x-3 justify-between font-bold'>
            <li className=' '>Logo</li>
            <div className=' flex space-x-16 font-bold'>
              <li>About</li>
              <li>Pricing</li>
              <li>Review</li>
            </div>
          </ul>
        </nav>
  )
}

export default Header
