import { Center, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'
const ItemList = ({popularMovies}) => {




  return (
  
    <Wrap spacing='30px'>
    {
      popularMovies.map((movie)=>(
      <Item key={movie.id} movie={movie} />
      ))
    }
 </Wrap>
  
  )
}

export default ItemList