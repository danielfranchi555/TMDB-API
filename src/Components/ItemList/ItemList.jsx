import { border, Button, Center, Divider, Stack, Switch, Text, Wrap, WrapItem } from '@chakra-ui/react'
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
    slidesToShow: 6,
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
     <Stack gap={10} direction='column'>

    <Stack>
        <Text mt='20px' borderLeft='solid #ff5722 2px ' style={{color:'white',fontSize:'20px',padding:'6px'}}> Movies Upcomming</Text>
       <Slider  {...settings}>
        
     {
      popularMovies.map((movie)=>(
      <Item  key={movie.id} movie={movie} />
      ))
    }
    </Slider>
    </Stack>
   <Divider/>
         <Stack>
         <Text  borderLeft='solid #ff5722 2px ' style={{color:'white',fontSize:'20px',padding:'6px'}}> Popular Movies</Text>
      <Slider  {...settings}>
     {
      moviesTop.map((movie)=>(
      <Item  key={movie.id} movie={movie} />
      ))
    }
    </Slider>
         </Stack>
 
    </Stack>
    

    </>
  
   
  
  )
}

export default ItemList