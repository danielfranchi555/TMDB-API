import {  Button,  Center,  Container, Image, Stack, Tag, Text, background } from '@chakra-ui/react'
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



  const oficialTrailer = trailer.find(movie => movie.name === 'Official Trailer')
   
   const key = oficialTrailer? oficialTrailer.key : null

 
  
 


  const settings = {
    className: "center",
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

  /*   const basicBoxStyles = {
        position:'relative',
        widht:'100%',
        filter:'auto',
        brightness:'50%',
        background:
         `url(${getImageBg()}) center/cover no-repeat`,
      } */


     

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
       {/*  <Stack justify='center'   h={{base:'145vh',md:'100vh'}} sx={basicBoxStyles} >

     </Stack> */}

    <Stack  width={{base:'100%',md:'100%'}} h={{base:'auto',md:'400px'}}>
         <Youtube opts={opts} videoId={key}></Youtube>
            </Stack> 
        <Stack mt='20px'  direction={['column', 'row']}   h='auto' top='170px'>
               <Image
    boxSize={{base:'290px',md:'auto'}}
    m={{base:'auto',md:'0px'}}
    p={{base:'0px',md:'5px'}}
    objectFit='contain'
    src={getImage()}
    alt='Dan Abramov'
  />
    <Stack>
     
           <Text     m={{base:'auto',md:'0px'}}
  color='white' fontWeight='700' fontSize='27px'>
      {movieDetail.title }-({movieDetail.release_date})
      <Stack  direction='row' color='white' fontSize='12px'>  {!movieDetail.genres? <p>no hay</p> : movieDetail.genres.map((item)=>  <Tag size='md' color='white' variant='outline' border='solid 1px orange' >
      {item.name}
    </Tag> )}</Stack>
      </Text>
     
      <Stack>
     <Text color='white' fontSize='15px'>{movieDetail.overview}</Text>  
      </Stack>
     <Stack w='500px'  h='250px'>
      <Tag mt='30px' w='62px' color='white' variant='outline' border='solid 1px orange'> <Center> credits</Center> </Tag>
       <Slider {...settings}>
               {credits.map((item)=>(
              <Credits item={item}/>           
             ))}
            </Slider>
     </Stack>
    </Stack>
   </Stack>
    </>
 
  

    

   
  )
}

export default ItemDetail