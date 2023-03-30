import React, {  createContext, useContext, useState } from 'react'


export const Contexto = createContext()
export const UsarContext = ()=> useContext(Contexto)

const Context = ({children}) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesTop, setMoviesTop] = useState([]);
  const [loading,setLoading] = useState(true)

  const allMovies = popularMovies.concat(moviesTop)

  //peticion a las peliculas mas populares
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


  //peticion a las peliculas que se van a estrenar
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


  //peticion a las peliculas que estan en el top
const getPopularMoviesTopRated = async (setMoviesTop)=>{
  try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=364d3195439e0a83c0678c267c5bbefe&language=en-US&page=1`)
      const resp = await data.json()
      setMoviesTop(resp.results)   

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
        getPopularMoviesTopRated,
        popularMovies,
        moviesTop,
        setPopularMovies,
        setMoviesTop,
        allMovies
        
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Context