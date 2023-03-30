import Slider from 'react-slick';
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@chakra-ui/react';
import ImageBanner from '../ImageBanner/ImageBanner';
import { UsarContext } from '../Context/Context';
const Banner = () => {

 const [slider,setSlider] = useState([])
  
 const {getPopularMoviesUpComming}=UsarContext()

 useEffect(()=>{
  getPopularMoviesUpComming(setSlider)
 },[])


 const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear"
};
  return (
    <Box mb='100px'>
      <Slider {...settings}>
         {slider.map((item)=>(
          <ImageBanner item={item}/>
         ))}
      </Slider>
    </Box>
  )
}

export default Banner