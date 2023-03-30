import { Box, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import Slider from 'react-slick';
import CarouselMini from '../carouselMini/CarouselMini';

const Recomendation = ({recomendation}) => {
  
   

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
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
            slidesToScroll: 2,
            initialSlide: 0,                                    
    
            }
          }
        ]
      };
    

  return (
    <Stack px='50px'   maxW={{base:'390px',md:'70rem'}}>
        <Text color='white' fontSize='20px'>Recomendaciones</Text>
        <Slider style={{heigth:'200px'}} {...settings}>
            {recomendation.map((item)=>(
                <CarouselMini item={item}/>
            ))}
        </Slider>
    </Stack>
 
  )
}

export default Recomendation