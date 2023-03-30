import { Box, Button, Center, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Recomendation from '../Recomendation/Recomendation'
import CarouselCredits from '../CarouselCredits/CarouselCredits';
const ItemDetail = ({movieDetail,recomendation,credits}) => {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };



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
      console.log(credits)
  return (
    <>
     <Stack justify='center'  h={{base:'125vh',md:'80vh'}} sx={basicBoxStyles} >

     </Stack>

     <Wrap  p='20px' position='absolute' h={{base:'auto',md:'70vh'}} ml={{base:'0px',md:'50px'}}  w={{base:'auto',md:'auto'}}  direction={['column', 'row']}   top={{base:'10%',md:'13%'}} >
  <WrapItem display='flex' h='400px ' border='solid white'>
      <Image
     h='100%'
     src={getImage()}
     boxShadow='inner' p='0.5' rounded='md' 
     />
    
  </WrapItem>
  <WrapItem  >
     
    <Stack h={{base:'auto',md:'800px'}} flexDirection='column' w={{base:'auto',md:'600px'}}  >
      <Stack  padding='20px' gap='10px' direction='row' align='center' >
        <Box>
        <Text fontSize='25px' color='white'> {movieDetail.title}</Text>
        </Box>
        <Box>
        <Text color='white'> ( {movieDetail.release_date} )</Text> 
        </Box>
      </Stack>
            <Stack justify='center' align='center' >
            <Box>
            <Text style={{color:'white',fontSize:'auto'}}>{movieDetail.overview}</Text>
            </Box>
           
            </Stack>
            <Stack  h='auto'>
              <Text fontSize='20px' color='white'>Credits</Text>
                <Slider {...settings}>
               {credits.map((item)=>(
              <CarouselCredits item={item}/>             
             ))}
            </Slider> 
            </Stack>
                 
        </Stack>
  </WrapItem>
¿
</Wrap>

     <Recomendation  recomendation={recomendation} />
    

    </>
   
  )
}

export default ItemDetail