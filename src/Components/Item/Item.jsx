import { Box, Card, CardBody, Center, Heading, Image, Stack, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({movie}) => {
  const getImage = ()=>{
    const url =`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` 
    return url
  }

  return (
     
    <Box>
       <Card w={{base:'180px',md:'220px'}} >
     <Link to={`/detail/${movie.id}`}>   
  <CardBody>
    <Image
      src={getImage()}
      alt='Green double couch with wooden legs'
    />
  </CardBody>
  </Link>
</Card>
      
     
    </Box>
  )
}

export default Item