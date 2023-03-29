import { Container, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {getPopularMovies} from '../../query'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
 const [popularMovies,setPopularMovies]= useState([])
   
 console.log(popularMovies)
    useEffect(()=>{
    getPopularMovies(setPopularMovies)
    },[])

  return (
    <>  
        <ItemList popularMovies={popularMovies} />
    </>
  )
}

export default ItemListContainer