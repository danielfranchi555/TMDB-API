import { Box, Card, CardBody, Center, Heading, Image, Stack, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Item = ({movie}) => {
  const getImage = ()=>{
    const url =`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` 
    return url
  }

  return (
    <Box  w='200px' h='300px' >
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={getImage()}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
</Card>
    </Box>
  )
}

export default Item