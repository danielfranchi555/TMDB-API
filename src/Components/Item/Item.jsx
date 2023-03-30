import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({movie}) => {
  const getImage = ()=>{
    const url =`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` 
    return url
  }

  return (
     
    <Box mt='20px' >
     <Link to={`/detail/${movie.id}`}>   
    <Image
      w={{base:'150px',md:'150px'}}
      borderRadius='lg'
      src={getImage()}
      alt='Green double couch with wooden legs'
    />
  </Link>
      
     
    </Box>
  )
}

export default Item