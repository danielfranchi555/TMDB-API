import { Center, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [movieDetail,setMovieDetail]=useState({})
  const [recomendation,setRecomendation]=useState([])
  const [credits,setCredits]=useState([])
  const [trailer,setTrailer]=useState([])
  const [loading,setLoading]=useState(true)

  const {id}=useParams()
  
  const getDetailMovie = async ()=>{
   try {
    const data = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=364d3195439e0a83c0678c267c5bbefe&language=en-US`)
    const resp = await data.json()
    setMovieDetail(resp)
    setLoading(false)
   } catch (error) { 
    console.log(error)
   }
  }



  const getCredits = async ()=>{
    try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=364d3195439e0a83c0678c267c5bbefe&language=en-US`)
    const resp = await data.json()
    setCredits(resp.cast)
    } catch (error) {
       console.log(error)
    }
  }

  const getRecommendations = async ()=>{
    try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=364d3195439e0a83c0678c267c5bbefe&language=en-US&page=1`)
    const resp = await data.json()
    setRecomendation(resp.results)
    setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getTrailer = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=364d3195439e0a83c0678c267c5bbefe&append_to_response=videos`)
    const resp = await data.json()
    setTrailer(resp.videos.results)
    console.log(trailer)
  }


  console.log(trailer)

  const filter = trailer.find(movie => movie.name === 'Official Trailer') 

  console.log(filter)

  useEffect(()=>{
  getDetailMovie()
  getRecommendations()
  getCredits()
  getTrailer()
  },[])

  return (
    <>
    {loading? <Center>
      <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </Center> :
          <ItemDetail credits={credits} recomendation={recomendation} movieDetail={movieDetail}/>

  }
    </>
  )
}

export default ItemDetailContainer