import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const ImageBanner = ({item}) => {
    const getImages = ()=>{
        const url = `https://image.tmdb.org/t/p/original/${item.poster_path}`
        return url
       }

  return (
    <>
    <Box position='relative' style={{backgroundImage:`url(${getImages()})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100%'}}  h='700px'>
    </Box>


  </>
  )
}

export default ImageBanner