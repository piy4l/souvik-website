import React from 'react'
import AVTR1 from '../../assets/avatar1.jfif'
import AVTR2 from '../../assets/avatar2.jfif'
import AVTR3 from '../../assets/avatar3.png'
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"


const data = [
{
  avatar: AVTR1,
  name: 'Dr. Md. Shohrab Hossain',
  review: 'Professor, Department of Computer Science and Engineering,\n Bangladesh University of Engineering and Technology, Dhaka-1000.\nCell: +8801819250196.\nEmail: mshohrabhossain@cse.buet.ac.bd'
},
{
  avatar: AVTR2,
  name: 'Dr. Tanzima Hashem',
  review: 'Professor, Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology, Dhaka-1000. Cell: + 88028623089. Email: tanzimahashem@cse.buet.ac.bd'
},
{
  avatar: AVTR3,
  name: 'Dr. Suryadipta Majumdar',
  review: 'Associate Professor, Concordia Institute for Information Systems Engineering (CIISE), Concordia University, Montréal, Quebec, Canada. Cell: 514-848-2424 ext 8580. Email: suryadipta.majumdar@concordia.ca'
},

]

const Testimonials = () => {
  return (
    <section id='testimonials'> 
      <h5>People who can talk about me</h5>
      <h2>References</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >

        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />       
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials