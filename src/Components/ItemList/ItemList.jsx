import { border, Center, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import Item from '../Item/Item'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ItemList = ({popularMovies}) => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,                                    

        }
      }
    ]
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