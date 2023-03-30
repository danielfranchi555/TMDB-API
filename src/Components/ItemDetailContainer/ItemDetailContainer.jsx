import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [movieDetail,setMovieDetail]=useState({})
  const [recomendation,setRecomendation]=useState([])
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

  console.log(recomendation)

  useEffect(()=>{
  getDetailMovie()
  getRecommendations()
  },[])

  return (
    <>
      <ItemDetail recomendation={recomendation} movieDetail={movieDetail}/>
    </>
  )
}

export default ItemDetailContainer