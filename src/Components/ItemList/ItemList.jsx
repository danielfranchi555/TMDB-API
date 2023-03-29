import { Center, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import Item from '../Item/Item'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ItemList = ({popularMovies}) => {

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };


  return (
    <Slider {...settings}>
     {
      popularMovies.map((movie)=>(
      <Item key={movie.id} movie={movie} />
      ))
    }
    </Slider>
   
  
  )
}

export default ItemList