import React, {  createContext, useContext, useState } from 'react'


export const Contexto = createContext()
export const UsarContext = ()=> useContext(Contexto)

const Context = ({children}) => {
 
  const [loading,setLoading] = useState(true)

  const getPopularMovies = async (setPopularMovies)=>{
    try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=364d3195439e0a83c0678c267c5bbefe`)
        const resp = await data.json()
        setPopularMovies(resp.results)       
        setLoading(false)
    } catch (error) {
         console.log(error)
    }
}

const getPopularMoviesUpComming = async (setSlider)=>{
    try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=364d3195439e0a83c0678c267c5bbefe`)
        const resp = await data.json()
        setSlider(resp.results)
        setLoading(false)
    } catch (error) {
         console.log(error)
    }
}

const getPopularMoviesTopRated = async (setPopularMovies)=>{
  try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=364d3195439e0a83c0678c267c5bbefe`)
      const resp = await data.json()
      setPopularMovies(resp.results)       
      setLoading(false)
  } catch (error) {
       console.log(error)
  }
}






  return (
    <Contexto.Provider value={{
        loading,
        setLoading,
        getPopularMovies,
        getPopularMoviesUpComming,
        getPopularMoviesTopRated
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Context