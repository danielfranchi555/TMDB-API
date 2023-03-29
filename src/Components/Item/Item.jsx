import { Center, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Item = ({movie}) => {
  return (
    <>
     <WrapItem>
    <Center w='300px' h='200px' bg='red.200'>
      {movie.title}
    </Center>
  </WrapItem>
    </>
  )
}

export default Item