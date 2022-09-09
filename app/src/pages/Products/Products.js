import { HStack, IconButton, Input, Text, VStack, Icon, FlatList, Box, Button, Center, Image, ScrollView, Menu} from "native-base";
import { List, User, MagnifyingGlass, UserPlus, Archive, Globe, ChatTeardropText, House} from "phosphor-react-native";
import { useContext, useEffect, useState } from "react";
import { InteractionManager, Pressable, Touchable, TouchableOpacity } from "react-native";
import { ButtonHome } from "../../components/ButtonHome";
import { Footer } from "../../components/Footer/Footer";
import { useNavigation } from "@react-navigation/native";
import { axios } from "axios";
import { BASE_URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";
// import Logo from '../../../assets/logo.png'
// import ProdutoImagem from '../../../assets/MV23071888_Estilete-Lamina-de-Precisao-Cirurgica---Bisturi-Profissional---10-Laminas_2_Zoom.png' 
// import ProdutoImagem from '../../../../api/public/storage/produtos/padrao.png' 


export function Products() {
    const navigation = useNavigation();
    const { products, product } = useContext(AuthContext);

    
    function handleNewClient() {
        navigation.navigate('registercliente');    
    }    
    
    function handleProducts() {
        navigation.navigate('products');    
    }
        
    function handleHome() {
        navigation.navigate('home');    
    }

    function handleClick(id) {
        console.log();
        navigation.navigate('requestproduct', { 
            paramKey: id, 
          });    

    } 

    function handleUser() {
        navigation.navigate('user');    

    }

    function handleEstoques() {
        navigation.navigate('estoques'); 


    }

    function handleLogin() {
        navigation.navigate('login'); 


    }

     useEffect(() => {
            (async function (){
                product()

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
            >
              <HStack ml='1'>
                    <ButtonHome onPress={handleHome} colorButton='white' variant='outline' title='Home' icon={<House size={30} color="#D63D2C"/>}/>
                    <ButtonHome onPress={handleNewClient} colorButton='white' variant='outline' title='Novo cliente' icon={<UserPlus size={30} color="#D63D2C"/>}/>
                    <ButtonHome onPress={handleProducts} colorButton='#D63D2C' title='Produtos' icon={<Archive size={30} color="#FAFAFA"/>}/>
                    <ButtonHome onPress={handleEstoques} colorButton='white' variant='outline' title='Estoques' icon={<Globe size={30} color="#D63D2C"/>}/>
              </HStack>
            </HStack>
            
            {/* <ScrollView> */}
                <HStack 
                    w='full'
                    h='full'
                >
                    <FlatList 
                        data={products}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={() => (
                            <Center my={10}>
                                <ChatTeardropText color='#9A989B' size={40} />
                                <Text fontSize={14}> Você não possue produtos cadastrados </Text>
                            </Center>
                        )}
                        renderItem={({item}) =>
                        <Pressable
                                onPress={() => handleClick(item.id)}
                                justifyContent='space-between'
                                alignItems='center'
                        >
                            <HStack bg='white' 
                                    mb={2} 
                                    mt={5}
                                    w='86%'
                                    rounded='sm'
                                    overflow='hidden'
                                
                            >
                                <Box h='full' w={2} bg='#D63D2C' />
                                <HStack alignItems='center' left='2'>

                                    <Image
                                            source={{uri:'http://localhost:8000/storage/produtos/padrao.png'}}
                                            w='120'
                                            h='110'
                                            alt="Imagem do produto"
                                        ></Image>
                                </HStack>

                                <VStack my={8} >
                                    <Text fontSize='md' fontWeight='bold' mb='1' ml='15%'>{item.nome}</Text>
                                    {/* <Text fontSize='xs' >{item.local}</Text> */}
                                    <Text fontSize='xs' w={168} mb='1' ml='15%'>{item.descricao}</Text>
                                    {/* <Text fontSize='xs' >{item.categoria}</Text> */}
                                    <Text fontSize='sm' ml='15%'>R${item.preco}</Text>
                                </VStack>
                            </HStack>   
                            </Pressable>
                        }
                    />
                </HStack>
             {/* </ScrollView> */}

        </VStack>

    )

}