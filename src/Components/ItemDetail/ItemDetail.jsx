import {  Box, Button,  Center,  Container, Image, Stack, Tag, Text, background } from '@chakra-ui/react'
import Slider from "react-slick";
import React, { useEffect,useState } from 'react'
import Youtube from 'react-youtube'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Credits from '../Credits/Credits';
const ItemDetail = ({movieDetail,credits,id}) => {

  const [trailer,setTrailer]=useState([])

  const getTrailer = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=364d3195439e0a83c0678c267c5bbefe&append_to_response=videos`)
    const resp = await data.json()
    setTrailer(resp.videos.results)
    console.log(trailer)
  }



  const oficialTrailer = !trailer? <p>no hay trailer</p>:trailer.find(movie => movie.name === 'Official Trailer')
   
   const key = oficialTrailer? oficialTrailer.key : null

 
  
 


  const settings = {
    speed: 500,
    slidesToShow: 5,
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
        slidesToShow: 4,
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

      useEffect(()=>{
       getTrailer()
      },[])

      const opts = {
        height:'400px',
        width:'100%',
        playerVars: {
          autoplay: 1,
        },
      };
    
  return (
    <>
    <Stack  width={{base:'100%',md:'100%'}} h={{base:'auto',md:'auto'}}>
         <Youtube opts={opts} videoId={key}></Youtube>
            </Stack> 


     <Stack position='realitve'  style={ {filter:'brightness(30%)', backgroundImage:`url(${getImageBg()})`,height:'90vh',width:'100%',marginTop:'20px',backgroundSize:'cover'}}>
     </Stack>

        <Stack position='absolute' direction={['column', 'row']} top='524px'   >
               <Image
               
    boxSize={{base:'290px',md:'450px'}}
    m={{base:'auto',md:'0px'}}
    p={{base:'0px',md:'5px'}}
    objectFit='contain'
    src={getImage()}
    alt='Dan Abramov'
  />
    <Stack  h={{base:'50px',md:'450px'}} w={{base:'500px',md:'600px'}}>
           <Text   
      color='white' fontWeight='700' fontSize={{base:'17px',md:'25px'}}>
      {movieDetail.title }-({movieDetail.release_date})
      <Stack  direction='row' color='white' fontSize='12px'>  {!movieDetail.genres? <p>no hay</p> : movieDetail.genres.map((item)=>  <Tag size='md' color='white' variant='outline' border='solid 1px orange' >
      {item.name}
    </Tag> )}</Stack>
      </Text>
     
      <Stack>
     <Box color='white' mt='0px' w={{base:'400px',md:'100%'}} fontSize={{base:'18px',md:'16px'}}>  {movieDetail.overview}</Box>  
      </Stack>
     <Stack  w={{base:'350px',md:'500px'}} ml={{base:'20px',md:'300px'}} h='250px'>
      <Tag mt='10px' w='62px' color='white' variant='outline' border='solid 1px orange'> Credits </Tag>
      <Stack >
          <Slider {...settings}>
               {credits.map((item)=>(
              <Credits item={item}/>           
             ))}
            </Slider>
      </Stack>
     
     </Stack>
    </Stack>
   </Stack>
    </>
 
  

    

   
  )
}

export default ItemDetail