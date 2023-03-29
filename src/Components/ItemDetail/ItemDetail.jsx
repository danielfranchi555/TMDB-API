import { Box, Button, Center, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ItemDetail = ({movieDetail}) => {
    const getImageBg = ()=>{
        const url = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`
        return url
    }

    const getImage = ()=>{
        const url = `https://image.tmdb.org/t/p/original${movieDetail.poster_path}`
        return url
    }

    const basicBoxStyles = {
        position:'relative',
        widht:'100%',
        filter:'auto',
        brightness:'30%',
       
        background:
         `url(${getImageBg()}) center/cover no-repeat`,
      }
  return (
    <>
     <Stack  h={{base:'170vh',md:'100vh'}} sx={basicBoxStyles} >

     </Stack>
    <Stack position='absolute' gap={{base:'0px',md:'10px'}}  h={{base:'auto',md:'500px'}}direction={['column', 'row']} w={{base:'80%',md:'60%'}}  left={{base:'10%',md:'20%'}} top={{base:'10%',md:'12%'}}>
        <Box  h='auto' w={{base:'auto',md:'100rem'}} >
     <Image
     w='100%'
     h='100%'
     src={getImage()}
     boxShadow='inner' p='0.5' rounded='md' bg='white'
     />
        </Box>
        <Stack flexDirection='column' border='solid'  p='20px' h={{base:'auto',md:'auto'}} justify='center' align='center' >

             <Stack justify='center' align='center'>
               <Text fontSize='25px' color='white'> {movieDetail.title}</Text>
             </Stack>
            

            <Stack direction='row'>
            <Button >english</Button>
            <Button >english</Button>
            </Stack>
            <Stack  p='20px' >
            <Box>
            <Text style={{color:'white',fontSize:'20px'}}>{movieDetail.overview}</Text>
            </Box>
            </Stack>
            <Stack>
              <Box borderLeft='solid white 2px'></Box>
            </Stack>
            
        </Stack>
    
      </Stack>
    </>
   
  )
}

export default ItemDetail