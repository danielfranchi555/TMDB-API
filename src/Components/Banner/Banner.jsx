import React, { useEffect, useState } from 'react'
import { UsarContext } from '../Context/Context';
import image from '../../banner.jpg'
import { Box, Image } from '@chakra-ui/react';
const Banner = () => {

 const [slider,setSlider] = useState([])
  
 const {getPopularMoviesUpComming}=UsarContext()

 useEffect(()=>{
  getPopularMoviesUpComming(setSlider)
 },[])


  return ( 
        <Image 
         w={{base:'100%',md:'100%'}}
         h={{base:'140px',md:'300px'}}
         objectFit='cover'
         src={image}/>
        

 
  )
}

export default Banner