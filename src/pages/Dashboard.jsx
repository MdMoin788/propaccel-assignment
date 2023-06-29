import React from 'react'


import "../styles/style.css"
import Header from '../components/Header';
import Meta from '../components/Meta';
import Features from '../components/Features';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const Dashboard = () => {


	return (
		<>
			<div className='bgg-circles  '></div>
			<div className='bgg-container absolute '></div>

			<div className='relative conatiner-wrapper'>
				<Header />
				<Meta />
				<Features />
				<SubscriptionPlans />
				<Slider />
			</div>
			<div className='BgFooters'></div>
			<Footer />

		</>
	)
}
export default Dashboard











































// {
// 	"question": "What are Encoding and Decoding ?",
// 	"answer": [
// 		{
// 			"ans": " Encoding and decoding, are terms used to describe the process of taking information in one form and changing it into another form",
// 			"subAnswer": [
// 				{
// 					"ans": "Encoding",
// 					"lastAnswer": [
// 						"Encoding is the process of taking data (in a software program, for example) and converting it into a form that can be stored or transmitted more efficiently",
// 						"Encoding is the process of taking data (in a software program, for example) and converting it into a form that can be stored or transmitted more efficiently."
// 					]
// 				}
// 			]
// 		}
// 	]
// }
