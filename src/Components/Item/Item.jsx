import { Box,Button,ButtonGroup,Card,CardBody,CardFooter,Center,Divider,Heading,Image, Stack, Text } from '@chakra-ui/react'
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
     <Card bg='#393e46' w={{base:'150px',md:'190px'}} h={{base:'290px',md:'320px'}}>
  <CardBody w={{base:'auto'}}>
    <Image
      src={getImage()}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Center>

      <Heading size='xs' color='#eeeeee'>{movie.title}</Heading>
      </Center>
    </Stack>
  </CardBody>

</Card>
  {/*   <Image
      w={{base:'150px',md:'150px'}}
      borderRadius='lg'
      src={getImage()}
      alt='Green double couch with wooden legs'
    /> */}
  </Link>
      
     
    </Box>
  )
}

export default Item