import React, { useEffect, useState } from 'react'
import { Button, Center, Container, Spinner, Stack } from '@chakra-ui/react'
import Banner from '../Banner/Banner'
import { UsarContext } from '../Context/Context'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = () => {

 const [popularMovies,setPopularMovies]= useState([])
 const [moviesTop,setMoviesTop]= useState([])


  const {getPopularMovies,getPopularMoviesTopRated,loading} = UsarContext()

    useEffect(()=>{
    getPopularMovies(setPopularMovies)
    getPopularMoviesTopRated(setMoviesTop)
    },[popularMovies])


   


   
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
   <Container  maxW={{base:'450px',md:'1200px'}}  >
   <Stack direction='row'>
     <Button colorScheme='teal' size='md' variant='outline' >Television</Button>
     <Button colorScheme='teal' size='md' variant='outline' >Movies</Button>
      </Stack>
    <ItemList moviesTop={moviesTop} popularMovies={popularMovies} />
   
    </Container>
   </>

  
  }
  
  
    
    

    
    </>
  )
}

export default ItemListContainer