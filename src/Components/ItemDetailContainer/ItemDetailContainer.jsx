import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [movieDetail,setMovieDetail]=useState({})
  const {id}=useParams()
  
  const getDetailMovie = async ()=>{
   try {
    const data = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=364d3195439e0a83c0678c267c5bbefe&language=en-US`)
    const resp = await data.json()
    setMovieDetail(resp)
    console.log(resp)
   } catch (error) { 
    console.log(error)
   }
  }

  useEffect(()=>{
  getDetailMovie()
  },[])

  return (
    <>
      <ItemDetail movieDetail={movieDetail}/>
    </>
  )
}

export default ItemDetailContainer