import { useNavigation } from '@react-navigation/native';
import { Button, Center, HStack, IconButton, Input, Text, VStack } from 'native-base';
import { HouseSimple, UserSquare } from 'phosphor-react-native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { HeaderRegister } from '../../components/HeaderRegister/HeaderRegister';
import { AuthContext } from '../../context/AuthContext';


const User = () => {
    const navigation = useNavigation();
    const { userInfo } = useContext(AuthContext);

    const h = 75;
    const m = 6;
    const focus = {
        borderWidth: 2,
        borderColor: '#424a5f',
        backgroundColor: 'white',
    }

    const nome = userInfo.usuario[0]['nome'];
    const email = userInfo.usuario[0]['email'];
    const telefone = userInfo.usuario[0]['telefone'];

    // useEffect(() => {
    //     (async function (){
            
            
            


    //     })();


    // }, []);
    
    function handleGoBack() {
        navigation.goBack();    
    }



    return (      
        <VStack flex={1} h='full' w='full' bgColor='white' >
            <HeaderRegister title='Perfil' onPress={handleGoBack} />

            <VStack
                mt='15%'
                alignItems='center'
                >

                    {/* <IconButton mt='-10%' mb='15%' icon={<HouseSimple size={30} color="#D63D2C" weight="bold" />} onPress={handleHome}/> */}
                    <UserSquare size={88} color='#424a5f' />
                    <Input placeholder="Nome" 
                    keyboardType="default"
                    returnKeyType="next"                
                    mt='12%' 
                    h={h} 
                    ml={m}
                    mr={m}
                    value={nome}
                    _focus= {focus}
                    />
                <HStack>

                    <Input placeholder="Email"
                        keyboardType="email-address"
                        returnKeyType="next"
                        mt={15} 
                        h={h}
                        w='40%'
                        ml={m}
                        mr={m}
                        value={email}
                        // value={getDate()}
                        _focus= {focus}
                    /> 

                    <Input placeholder="Telefone"
                        keyboardType="phone-pad"
                        returnKeyType="next"
                        mt={15} 
                        h={h}
                        w='45.8%'
                        ml={m-10}
                        mr={m}
                        value={telefone}
                        // value={getDate()}
                        _focus= {focus}
                    /> 
                </HStack>

            <Input placeholder="Senha" 
                    mt={15} 
                    h={h}
                    ml={m}
                    mr={m}
                    returnKeyType="done"
                    secureTextEntry
                    // value={'felipeleite'}
                    _focus= {focus}
                />

                    <Button
                        mt={7}
                        color='white'
                        bgColor='#D63D2C'
                        _pressed={{
                            backgroundColor: '#D63D1C',
                            opacity: '10'
                        }}
                    >
                    <Text 
                    color='white'
                    >
                        Salvar alterações
                    </Text>
                </Button>
            </VStack>
        </VStack>
    )
}

export default User;