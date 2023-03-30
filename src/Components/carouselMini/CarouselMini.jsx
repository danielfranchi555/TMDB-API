import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CarouselMini = ({item}) => {

    const getImage = ()=>{
        const url = `https://www.themoviedb.org/t/p/w250_and_h141_face${item.poster_path}`
        return url
    }


  return (
    <Box>
      <Card bg='none'  >
  <CardBody >
    <Image
    src={getImage()}
    borderRadius='lg'
    />
    <Stack >
      <Center>
      <Heading mt='5' size='xs' color='white'>{item.title}</Heading>
      </Center>
    </Stack>
  </CardBody>
</Card>
    {/*        <Link to={`/${item.id}`}>
            <Image
    h='200px'
    objectFit='contain'
    src={getImage()}
    alt='Dan Abramov'
  />
      </Link>  */}
    
    
    </Box>
  )
}

export default CarouselMini