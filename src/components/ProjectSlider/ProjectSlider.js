import './ProjectSlider.css'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import SliderPage from './SliderPage.js'
import { PROJECTS } from './ProjectData.js'

export default function ProjectSlider({ style }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div style={style}>
      <Slider {...settings}>
        {PROJECTS.map((project) => (
          <div>
            <SliderPage key={project.title} {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}