import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useDisclosure,

} from "@chakra-ui/react";
import Banner from "../Banner/Banner";
import { UsarContext } from "../Context/Context";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesTop, setMoviesTop] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const allMovies = popularMovies.concat(moviesTop)
  console.log(allMovies)

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  const { getPopularMovies, getPopularMoviesTopRated,loading,input,setInput} = UsarContext();

  useEffect(() => {
    getPopularMovies(setPopularMovies);
    getPopularMoviesTopRated(setMoviesTop);
  }, []);

  const handleChange = (e) => {
     const {value} = e.target
     setInput(value)
  };

  
 const filter = !input ? allMovies : allMovies.filter(movie => movie.title.toLowerCase().includes(input.toLocaleLowerCase()))
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

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
          <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        > Click To Search</Button>

<Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              variant="outline"
              color="blac"
              w="300px"
              placeholder="Outline"
            />
            <Button type="submit">enviar</Button>
          </form>
           {filter.map((item)=>(
            <p>
              {item.title}
            </p>
            
           ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          <Container maxW={{ base: "450px", md: "1200px" }}>
            <ItemList moviesTop={moviesTop} popularMovies={popularMovies} />
          </Container>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
