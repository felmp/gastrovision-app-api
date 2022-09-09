import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { HStack, IconButton, Input, Text, VStack, Icon, ButtonNativeBase, Heading, View, Image, ScrollView, FlatList, Pressable, Center, Box, Menu } from "native-base";
import { List, User, MagnifyingGlass, UserPlus, Archive, Globe, House, ChatTeardropText } from "phosphor-react-native";
import { ButtonHome } from "../../components/ButtonHome";
import { Footer } from "../../components/Footer/Footer";
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from '../../context/LocaleConfig'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Estoques() {
    const { locais, selectEstoque, estoques } = useContext(AuthContext);


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

    function handleLogin() {
        navigation.navigate('login'); 


    }

    
    useEffect(() => {
        (async function (){
            selectEstoque();

        })();


    }, []);


    return(
        <VStack flex={1} pb={6} backgroundColor='#ECEEF6'>
            <HStack w='full'
                    pt={12}
                    pb={155}
                    roundedBottom={60}
                    px={4}
                    bg="#D63D2C"
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <IconButton icon={<List size={30} color="#FAFAFA" weight="bold" />} />
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
                        <ButtonHome onPress={handleHome} colorButton='white' variant='outline' title='Home' icon={<House size={30} color="#D63D2C"/>}/>
                        <ButtonHome onPress={handleNewClient} colorButton='white' variant='outline' title='Novo cliente' icon={<UserPlus size={30} color="#D63D2C"/>}/>
                        <ButtonHome onPress={handleProducts} colorButton='white' variant='outline' title='Produtos' icon={<Archive size={30} color="#D63D2C"/>}/>
                        <ButtonHome colorButton='#D63D2C' variant='outline' title='Estoques' icon={<Globe size={30} color="#FAFAFA"/>}/>
                    </HStack>
                </HStack>
            

                <ScrollView>

                {/* <VStack
                    h='full'
                    ml='7'
                    mr='-6'
                    justifyContent='space-between'
                    alignItems='center'
                > */}

                <HStack 
                    w='full'
                    h='full'
                    ml='7'
                    mr='-6'
                >
                    <FlatList 
                        data={locais}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={() => (
                            <Center my={6}>
                                <ChatTeardropText color='#9A989B' size={40} />
                                <Text fontSize={14}> Você não possue estoques cadastrados </Text>
                            </Center>
                        )}
                        renderItem={({item}) =>

                            <HStack bg='white' 
                                    mb={2} 
                                    mt={5}
                                    w='86%'
                                    rounded='sm'
                                    overflow='hidden'
                                    
                                
                            >
                                <Box h='full' w={2} bg='#D63D2C' />

                                <VStack my={8} >
                                    <Text fontSize='md' fontWeight='bold' mb='1' ml='15%'>{item.local}</Text>
                                </VStack>
                            </HStack>   
                        }
                    />
                </HStack>

                {/* </VStack> */}
            </ScrollView>
                
        </VStack>
    )

}