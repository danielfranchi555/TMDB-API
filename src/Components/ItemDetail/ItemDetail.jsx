import { Box, Button, Center, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Recomendation from '../Recomendation/Recomendation'

const ItemDetail = ({movieDetail,recomendation}) => {

    const getImageBg = ()=>{
        const url = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`
        return url
    }

    const getImage = ()=>{
        const url = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`
        return url
    }

    const basicBoxStyles = {
        position:'relative',
        widht:'100%',
        filter:'auto',
        brightness:'40%',
        background:
         `url(${getImageBg()}) center/cover no-repeat`,
      }
  return (
    <>
     <Stack justify='center'  h={{base:'100vh',md:'85vh'}} sx={basicBoxStyles} >
     </Stack>

     <Wrap p='20px' position='absolute' h={{base:'auto',md:'500px'}} direction={['column', 'row']}   top={{base:'10%',md:'10%'}} spacing='30px' justify='center'>
  <WrapItem h='800px '>
    <Image
     h='auto'
     src={getImage()}
     boxShadow='inner' p='0.5' rounded='md' 
     />
  </WrapItem>
  <WrapItem>
    <Center w='780px' h='300px' >
    <Stack flexDirection='column' w='700px'   justify='center' align='center' >
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
    </Center>
  </WrapItem>
¿
</Wrap>

     <Recomendation  recomendation={recomendation} />
    

    </>
   
  )
}

export default ItemDetail