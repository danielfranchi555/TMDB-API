import { Box, Center, Image, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Item = ({movie}) => {
  const getImage = ()=>{
    const url =`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` 
    return url
  }

  return (
    <Box border='solid' w='200px' h='300px' >
      {movie.title} 
      <Image boxSize='100%'
      objectFit='cover' src={getImage()} alt='Dan Abramov' />
    </Box>
  )
}

export default Item