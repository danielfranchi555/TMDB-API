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

 console.log(slider)

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
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