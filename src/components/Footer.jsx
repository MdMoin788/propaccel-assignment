import React from 'react'
import "../styles/style.css"

const Footer = () => {
  return (



    
    <div className='w-full   space-x-24 mx-auto mb-20  ms-10 mt-40 customZindex '>

      <div class=" mb-3 w-[90%]  ms-6 flex flex-col  items-center space-x-3">
        <h1 className='font-semibold text-3xl mb-4 text-center'>
          We have What you are looking for ?
        </h1>
        <p class=" mb-10 text-center ">You have a new message! regarding assiggnment completed You have a new message!</p>
        <button className='rounded p-2 text-white   px-6 py-3 text-xs btnColors w-40'> Get Started Now</button>
      </div>

      <hr className='w-[90%] mt-32 mb-8' />

      <div class=" w-[90%]  ms-6 flex   justify-between space-x-3">

        <span class="  ">All right resserved here</span>

        <div class=" flex space-x-3 w-[33%]  text-white ">
          <span >Terms  & Conditions</span>
          <span >Privacy policy</span>
          <span >Products</span>
        </div>

        <img className='w-32 rounded' src="https://img.freepik.com/premium-vector/social-media-icon-set-facebook-instagram-twitter-youtube-vector-zaporizhzhia-ukraine-december-15-2021_579956-2687.jpg?w=2000" alt="" />

      </div>


    </div>
  )
}

export default Footer
