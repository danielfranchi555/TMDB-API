const ApiKey = '364d3195439e0a83c0678c267c5bbefe'

 const getPopularMovies = async (setPopularMovies)=>{
    try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
        const resp = await data.json()
        setPopularMovies(resp.results)
    } catch (error) {
         console.log(error)
    }
}

 export  { getPopularMovies } 