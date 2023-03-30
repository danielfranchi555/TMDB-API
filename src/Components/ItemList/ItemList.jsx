import { border, Button, Center, Stack, Switch, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import Item from '../Item/Item'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ItemList = ({popularMovies,moviesTop}) => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
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
          slidesToShow: 3,
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
        slidesToScroll: 2,
        initialSlide: 0,                                    

        }
      }
    ]
  };




  return (
    <>
     <Stack direction='column'>
   
       <Slider  {...settings}>
     {
      popularMovies.map((movie)=>(
      <Item  key={movie.id} movie={movie} />
      ))
    }
    </Slider>
    </Stack>
    
    
    <h1 style={{color:'white',fontSize:'20px'}}>Popular Movies</h1>
      <Slider  {...settings}>
     {
      moviesTop.map((movie)=>(
      <Item  key={movie.id} movie={movie} />
      ))
    }
    </Slider>
    </>
  
   
  
  )
}

export default ItemList