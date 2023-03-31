import { Badge, Center, Container, Image, Stack, Tag, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Credits from '../Credits/Credits';
const ItemDetail = ({movieDetail,credits}) => {

  const settings = {
    className: "center",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,                                    

        }
      }
    ]
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
        brightness:'30%',
        background:
         `url(${getImageBg()}) center/cover no-repeat`,
      }
      console.log(credits)
  return (
    <>
        <Stack justify='center' border='solid white'  h={{base:'145vh',md:'95vh'}} sx={basicBoxStyles} >

     </Stack>
    <Container maxW="container.xl"  >
        <Stack direction={['column', 'row']} position='absolute'  h='450px' top='170px'>
               <Image
    boxSize={{base:'290px',md:'auto'}}
    m={{base:'auto',md:'0px'}}
    p={{base:'0px',md:'5px'}}
    objectFit='contain'
    src={getImage()}
    alt='Dan Abramov'
  />

  
  <Stack >
    <Container maxW={{base:'auto',md:'auto'}} >
        <Text  color='white' fontWeight='700' fontSize='27px'>
      {movieDetail.title }-({movieDetail.release_date})
      <Stack  direction='row' color='white' fontSize='12px'>  {!movieDetail.genres? <p>no hay</p> : movieDetail.genres.map((item)=>  <Tag size='md' color='white' variant='outline' border='solid 1px orange' >
      {item.name}
    </Tag> )}</Stack>
      </Text>
     <Text color='white' fontSize='20px'>{movieDetail.overview}</Text>  
         <Stack  width={{base:'300px',md:'700px'}} h='auto'>
         <Tag  width='65px' size='md' color='white' variant='outline' border='solid 1px orange'> Credits </Tag>
                <Slider {...settings}>
               {credits.map((item)=>(
              <Credits item={item}/>           
             ))}
            </Slider> 
             
            </Stack>
    </Container>
   
 
  </Stack>
   </Stack>
   
       </Container>
       

    </>
 
  

    

   
  )
}

export default ItemDetail