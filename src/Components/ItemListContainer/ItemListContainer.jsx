import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  Image,
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
  Wrap,
  WrapItem,

} from "@chakra-ui/react";
import Banner from "../Banner/Banner";
import { UsarContext } from "../Context/Context";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesTop, setMoviesTop] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('xl')
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

  const getImage = (poster_path)=>{
   const url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
   return url
  }

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
        >  Search</Button>
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody w='500px'>
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
           <Wrap h='auto' mt='10px'>
            {filter.map((item)=>(
              <WrapItem>
             <Center w='140px' h='auto' bg='red.200'>
             <Image
              boxSize='auto'
              objectFit='cover'
              src={getImage(item.poster_path)}
            />
             </Center>
           </WrapItem>
            ))}
            
         </Wrap>


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
