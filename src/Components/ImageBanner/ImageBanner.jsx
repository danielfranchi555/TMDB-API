import { Box, Image } from '@chakra-ui/react'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

const ImageBanner = ({item}) => {
    const getImages = ()=>{
        const url = `https://image.tmdb.org/t/p/original/${item.poster_path}`
        return url
       }

  return (
   
   <Carousel.Item>
        <img
          className="d-block w-100"
          src={getImages()}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


  )
}

export default ImageBanner