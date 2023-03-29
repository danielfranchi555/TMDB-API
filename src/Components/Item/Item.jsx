import { Box, Center, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Item = ({movie}) => {
  return (
    <Box border='solid' h='200px'>
      {movie.title}
   
    </Box>
  )
}

export default Item