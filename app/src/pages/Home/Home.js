import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { HStack, IconButton, Input, Text, VStack, Icon, ButtonNativeBase, Heading, View, Image, ScrollView, Box, Menu, Pressable, HamburgerIcon, MoonIcon } from "native-base";
import { List, User, MagnifyingGlass, UserPlus, Archive, Globe, House } from "phosphor-react-native";
import { ButtonHome } from "../../components/ButtonHome";
import { Footer } from "../../components/Footer/Footer";
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from '../../context/LocaleConfig'
import { useState } from "react";
import { useCallback } from 'react';

export function Home() {


    const navigation = useNavigation();
    
    function handleNewClient() {
        navigation.navigate('registercliente');    
    }
    
    function handleProducts() {
        navigation.navigate('products');

    }    
    
    function handleHome() {
        navigation.navigate('home');    
    }

    function handleUser() {
        navigation.navigate('user'); 


    }

    function handleEstoques() {
        navigation.navigate('estoques'); 


    } 

    function handleLogin() {
        navigation.navigate('logout'); 


    }

    const openDrawer = useCallback(() => {
        navigation.dispatch(DrawerActions.openDrawer());
      },[]);
    

    return(
        <VStack flex={1} pb={6} backgroundColor='#ECEEF6'>
          <ScrollView>
            <HStack w='full'
                    pt={12}
                    pb={155}
                    roundedBottom={60}
                    px={4}
                    bg="#D63D2C"
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <IconButton icon={<List size={30} color="#FAFAFA" weight="bold" />} onPress={openDrawer} />
                    {/* <HStack 
                        alignItems='center'
                        justifyContent='center'
                        rounded='10'
                        backgroundColor='white'
                    >
                        <Image
                            source={Logo}
                            w='200'
                            h='90'
                        ></Image>
                    </HStack> */}
                        <Menu w="190" trigger={triggerProps => { return <IconButton icon={<User size={30} color="#FAFAFA" weight="bold" />} {...triggerProps} />  }}>
                            <Menu.Item onPress={handleUser} >Perfil</Menu.Item>
                            <Menu.Item onPress={handleLogin}>Logout</Menu.Item>
                        </Menu>
              
            </HStack>
            <VStack px={7} mt="-30%">
                <Input w='full' 
                color='#9A989B' 
                placeholder='Buscar...'
                backgroundColor='white'
                placeholderTextColor='#9A989B'
                InputLeftElement={<Icon as={<MagnifyingGlass size={20} color='#9A989B' />} ml='2' color='#9A989B' />}
                _focus={{
                    borderWidth: 1,
                    borderColor: 'white',
                    backgroundColor: 'white',
                }}/>
            </VStack>

                <HStack 
                    backgroundColor='#FAFAFA'
                    width='full'
                    height='120'
                    mt='20'
                    rounded='20'
                    justifyItems='center'     
                    alignItems='center'
                    mb='5'
                >
                    <HStack ml='1'>
                        <ButtonHome onPress={handleHome} colorButton='#D63D2C' title='Home' icon={<House size={30} color="#FAFAFA"/>}/>
                        <ButtonHome onPress={handleNewClient} colorButton='white' variant='outline' title='Novo cliente' icon={<UserPlus size={30} color="#D63D2C"/>}/>
                        <ButtonHome onPress={handleProducts} colorButton='white' variant='outline' title='Produtos' icon={<Archive size={30} color="#D63D2C"/>}/>
                        <ButtonHome onPress={handleEstoques} colorButton='white' variant='outline' title='Estoques' icon={<Globe size={30} color="#D63D2C"/>}/>
                    </HStack>
                </HStack>
            


                <VStack
                    h='full'
                    ml='2'
                    mr='2'
                >

                    <Calendar />                    
                </VStack>
            </ScrollView>
                
        </VStack>
    )

}