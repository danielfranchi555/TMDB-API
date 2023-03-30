import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CarouselCredits = ({item}) => {

    const getProfile = ()=>{
        const url = `https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`
        return url
    }
    

  return (
    <>
    <Box border='solid white'>
    <Image
    boxSize='100px'
    objectFit='cover'
    src={getProfile()}
    alt='Dan Abramov'
  />
    </Box>
       
    </>
       
     
  )
}

export default CarouselCredits