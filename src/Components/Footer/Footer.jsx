import { Box, Center, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
        <Stack bg='black' h='70px' justify='center' align='center' direction='row'>
        <p style={{color:'white'}}>©2023 Created by <span style={{color:'#ff5722'}} >DanielFranchi</span></p>
        </Stack>
  )
}

export default Footer