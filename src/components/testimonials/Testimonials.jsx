import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const data = [
{
  avatar: AVTR1,
  name: 'Tina Snow',
  review: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam explicabo eligendi corrupti vitae perspiciatis, voluptatum eveniet culpa, aliquam unde neque iusto ut, vero sed. Pariatur perspiciatis quasi obcaecati totam.'
},
{
  avatar: AVTR2,
  name: 'Tina Snow',
  review: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam explicabo eligendi corrupti vitae perspiciatis, voluptatum eveniet culpa, aliquam unde neque iusto ut, vero sed. Pariatur perspiciatis quasi obcaecati totam.'
},
{
  avatar: AVTR3,
  name: 'Tina Snow',
  review: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam explicabo eligendi corrupti vitae perspiciatis, voluptatum eveniet culpa, aliquam unde neque iusto ut, vero sed. Pariatur perspiciatis quasi obcaecati totam.'
},
{
  avatar: AVTR4,
  name: 'Tina Snow',
  review: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam explicabo eligendi corrupti vitae perspiciatis, voluptatum eveniet culpa, aliquam unde neque iusto ut, vero sed. Pariatur perspiciatis quasi obcaecati totam.'
}
]

const Testimonials = () => {
  return (
    <section id='testimonials'> 
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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