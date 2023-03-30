import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Credits = ({item}) => {

    const getProfile = ()=>{
    const url = `https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`
    return url
}

  return (
    <>
<Box>
<Image
borderRadius='20px 10px 10px 10px'
boxSize='120px'
objectFit='cover'
src={getProfile()}
alt='Dan Abramov'
/>
<Text  color='white'>{item.name}</Text>
</Box>
   
</>
  )
}

export default Credits





