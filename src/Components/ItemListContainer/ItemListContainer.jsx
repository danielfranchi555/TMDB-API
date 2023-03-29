import React, { useEffect, useState } from 'react'
import { Center, Spinner } from '@chakra-ui/react'
import Banner from '../Banner/Banner'
import { UsarContext } from '../Context/Context'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = () => {

 const [popularMovies,setPopularMovies]= useState([])


  const {getPopularMovies,loading} = UsarContext()

    useEffect(()=>{
    getPopularMovies(setPopularMovies)
    },[])



  return (
    <>  
   {loading? <Center mt='100px'>
    <h1><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></h1>
   </Center> 
   :
   <>
     <Banner/>
    <ItemList popularMovies={popularMovies} />
   
    </>
  }
  
  
    
    

    
    </>
  )
}

export default ItemListContainer