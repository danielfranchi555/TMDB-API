import React, { useState } from 'react'
import {Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Input, useDisclosure, Wrap, WrapItem} from '@chakra-ui/react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UsarContext } from '../Context/Context';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [input,setInput] = useState('')

  const {allMovies}=UsarContext()

  const [size, setSize] = useState('md')
  const { isOpen, onOpen, onClose } =useDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
 
  const handleClose = () => {
    onClose()
  }

  const handleChange = (e) => {
    const {value} = e.target
    setInput(value)
 };

 
 const getImage = (poster_path) => {
  const url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  return url;
};

 const handleSubmit = (e) => {
   e.preventDefault();
 };

 const filter = !input ? allMovies : allMovies.filter(movie => movie.title.toLowerCase().includes(input.toLocaleLowerCase()))

  return (
    
    <Navbar bg="#222831" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/" style={{color:'#ff5722',fontSize:'30px'}}>Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
      <Button 
          className="me"onClick={() => handleClick(size)}
          key={size}
          m={4}
        >Search</Button>

<Drawer onClose={onClose} isOpen={isOpen} size={size}>
<DrawerOverlay />
<DrawerContent>
  <DrawerCloseButton />
  <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
  <DrawerBody>
  <form onSubmit={handleSubmit}>
      <Input
      onChange={handleChange}
      variant="outline"
      color="black"
      placeholder="Search"
    />
    <Wrap  mt='20px'>
{filter.map((item)=>(
    <>
     <WrapItem   >
      <Center w='130px' h='auto' >
        <Link onClick={() => handleClose()} to={`/detail/${item.id}`}>
        <Image
     boxSize='210px'
      objectFit='contain'
      src={getImage(item.poster_path)}
      alt='Dan Abramov'
    /> 
        </Link>

</Center>
     </WrapItem>      
    </>
   ))}

</Wrap>
    
  </form>
  
  </DrawerBody>
</DrawerContent>
</Drawer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  )
}

export default NavBar

{/*

 


 */}