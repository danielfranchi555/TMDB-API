import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const ImageBanner = ({item}) => {
    const getImages = ()=>{
        const url = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
        return url
       }

  return (
    <>
    <Box>

  <Image
    boxSize='100%'
    h='auto'
    position='center'
    objectFit='cover'
    src={getImages()}
    alt='Dan Abramov'
  />    
    </Box>

  </>
  )
}

export default ImageBanner