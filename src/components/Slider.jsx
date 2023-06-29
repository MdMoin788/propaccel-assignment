import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img from "./assignement.PNG"
import "../styles/style.css"

const Slider = () => {
    return (

        <div className='w-full flex  space-x-24 mx-auto mb-6  ms-10 mt-16'>


            <div class=" mb-3 w-[90%]  ms-6">
                <h1 className='font-semibold text-3xl mb-4'>
                    Review from customer
                </h1>
                <p class=" mb-1">You have a new message! regarding assiggnment completed</p>


                <AwesomeSlider
                // cssModule={{

                // }}
                // onFirstMount={onFirstMount}
                // onAnimationStart={onAnimationStart}
                // onAnimationEnd={onAnimationEnd}

                >
                    <div>
                        <div class="silders-box mb-3 w-[100%] bg-red-500 ms-6 ">

                            <div class="silders-box-content mb-6">
                                <img className='w-16 h-16 rounded-full me-3' src={img} alt="" />
                                <div className=''>
                                    <h4 class="silders-box-title font-bold">Md Moin</h4>
                                    <p class="silders-box-message font-semibold">Micrososft</p>
                                    <div class="silders-box-title font-bold flex">
                                        <img className='w-7' src="https://img.freepik.com/free-vector/star-glossy-yellow-colors-3d-cute-smooth-star-shape-realistic-vector-illustration-isolated-white-background_145391-1342.jpg" alt="" />
                                        <img className='w-7' src="https://img.freepik.com/free-vector/star-glossy-yellow-colors-3d-cute-smooth-star-shape-realistic-vector-illustration-isolated-white-background_145391-1342.jpg" alt="" />
                                        <img className='w-7' src="https://img.freepik.com/free-vector/star-glossy-yellow-colors-3d-cute-smooth-star-shape-realistic-vector-illustration-isolated-white-background_145391-1342.jpg" alt="" />
                                        <img className='w-7' src="https://img.freepik.com/free-vector/star-glossy-yellow-colors-3d-cute-smooth-star-shape-realistic-vector-illustration-isolated-white-background_145391-1342.jpg" alt="" />
                                        <img className='w-7' src="https://img.freepik.com/free-vector/star-glossy-yellow-colors-3d-cute-smooth-star-shape-realistic-vector-illustration-isolated-white-background_145391-1342.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p class="silders-box-message font-semibold ms-4">You have a new message! regarding assiggnment completed You have a new message! regarding assiggnment completed You have a new message! regarding assiggnment completed You have a new message! regarding assiggnment completed You have a new message! regarding assiggnment completed You have a new message! regarding assiggnment completed </p>


                        </div>
                    </div>




                </AwesomeSlider>

            </div>


        </div>
    )
}

export default Slider
