import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CarouselMini = ({item}) => {

    const getImage = ()=>{
        const url = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
        return url
    }


  return (
    <Box  width='200px'>
      <Link to={`/${item.id}`}>
            <Image
    boxSize='170px'
    objectFit='cover'
    src={getImage()}
    alt='Dan Abramov'
  />
      </Link>
    
    </Box>
  )
}

export default CarouselMini