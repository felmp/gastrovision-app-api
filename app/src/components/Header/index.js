import React from 'react';
// import { Image } from 'react-native';:
import { Image } from 'native-base';
import { Container } from './styles'
import Logo from '../../../assets/logo.png'

function Header() {
  return (
    <Container>
        <Image
            resizeMode='cover'
            source={Logo}
            mt='-10'
            mb='6'
            w='250'
            h='220'
            alt='Gastrovision'
         />

    </Container>
  )
}

export default Header;