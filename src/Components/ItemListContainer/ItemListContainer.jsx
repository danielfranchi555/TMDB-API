import { Container, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {getPopularMovies} from '../../query'
import Banner from '../Banner/Banner'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
 const [popularMovies,setPopularMovies]= useState([])
   
    useEffect(()=>{
    getPopularMovies(setPopularMovies)
    },[])

  return (
    <>  
    <Banner/>
    <ItemList popularMovies={popularMovies} />
    </>
  )
}

export default ItemListContainer