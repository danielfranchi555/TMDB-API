import { border, Center, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import Item from '../Item/Item'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ItemList = ({popularMovies}) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };




  return (
    <Slider  {...settings}>
     {
      popularMovies.map((movie)=>(
      <Item key={movie.id} movie={movie} />
      ))
    }
    </Slider>
   
  
  )
}

export default ItemList