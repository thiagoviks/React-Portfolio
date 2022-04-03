import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination, Navigation, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.'
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.'
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.'
  }, 
  {
    id: 4,
    avatar: AVATAR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}>
      {
        data.map(({id, avatar, name, review}) => {
          return (
            <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={avatar} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })
      }  
        {/*
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="AVATAR1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="AVATAR2" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="AVATAR3" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="AVATAR4" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in sapiente.
          </small>
        </article>
        */ }  
      </Swiper>
    </section>
  )
}

export default Testimonials