import React from 'react'
import "../styles/style.css"

const Features = () => {
  return (
    <div className='w-full py-12   mx-auto mb-6  ms-10 mt-10'>

    <div className='flex space-x-3 justify-between font-bold' >

        {/* box 1  */}
        <div className=' w-[50%]  font-bold  flex flex-col'>

            <div className=' w-[100%]  font-bold  flex '>

                <div class="box mb-3 w-[50%]">
                    <div class="box-content">
                        <h4 class="box-title">Interactive Features</h4>
                        <p class="box-message font-semibold">You have a new message! regarding assiggnment completed</p>

                    </div>
                </div>


                <div class="box mb-3 w-[50%] lastChild">
                    <div class="box-content">
                        <h4 class="box-title">Interactive Features</h4>
                        <p class="box-message font-semibold">You have a new message! regarding assiggnment completed</p>

                    </div>
                </div>

            </div>


            <div className=' w-[100%]  font-bold  flex '>

                <div class="box mb-3 w-[50%]">
                    <div class="box-content">
                        <h4 class="box-title">Interactive Features</h4>
                        <p class="box-message font-semibold">You have a new message! regarding assiggnment completed</p>

                    </div>
                </div>

                <div class="box mb-3 w-[50%] lastChild">
                    <div class="box-content">
                        <h4 class="box-title">Interactive Features</h4>
                        <p class="box-message font-semibold">You have a new message! regarding assiggnment completed</p>

                    </div>
                </div>




            </div>


        </div>
        {/* end   */}

        {/* box 2  */}


        <div className=' w-[50%]   font-bold  p-4 mt-10'>
            <h1 className='font-bold text-4xl mb-4'>
                About The Course
            </h1 >
            <p className='mb-4 w-4/5 font-light '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloremque nihil doloremque nihil doloremque nihil
            </p>
            <button className='rounded p-2 text-white   px-6 py-3 text-xs btnColors'> Explore Now</button>
        </div>

        {/* end   */}

    </div>


</div>
  )
}

export default Features
