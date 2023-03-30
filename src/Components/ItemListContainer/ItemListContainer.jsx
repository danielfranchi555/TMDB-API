import React, { useEffect } from "react";
import { Center, Container, Input, Spinner } from "@chakra-ui/react";
import Banner from "../Banner/Banner";
import { UsarContext } from "../Context/Context";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const {
    getPopularMovies,
    getPopularMoviesTopRated,
    loading,
    moviesTop,
    popularMovies,
    setMoviesTop,
    setPopularMovies,
  } = UsarContext();

  useEffect(() => {
    getPopularMovies(setPopularMovies);
    getPopularMoviesTopRated(setMoviesTop);
  }, []);


  return (
    <>
      {loading ? (
        <Center mt="100px">
          <h1>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </h1>
        </Center>
      ) : (
        <>
          <Banner />
          <Container maxW={{ base: "450px", md: "1200px" }}>
            <ItemList moviesTop={moviesTop} popularMovies={popularMovies} />
          </Container>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
