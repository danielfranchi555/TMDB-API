import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Credits = ({item}) => {

    const getProfile = ()=>{
    const url = `https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`
    return url
}

  return (
    <>
<Box w={{base:'80px',md:'90px'}}  h={{base:'150',md:'150px'}}  >
<Image
borderRadius='20px '
w={{base:'200px',md:'110px'}}
objectFit='contain'
src={getProfile()}
/>
<Text  color='white' fontSize={{base:'13px'}}>{item.name}</Text>
</Box>
   
</>
  )
}

export default Credits





