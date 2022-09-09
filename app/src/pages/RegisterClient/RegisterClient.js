import { Button, Input, VStack, Text, ScrollView, HStack} from "native-base";
import { HeaderRegister } from "../../components/HeaderRegister/HeaderRegister";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IdentificationBadge, Password } from "phosphor-react-native";
import Uf from "../../components/Uf/UF";

export function RegisterClient(){
    const h = 52;
    const m = 6;
    const focus = {
        borderWidth: 2,
        borderColor: '#424a5f',
        backgroundColor: 'white',
    }
    
    
    const [nome, setNome] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [telefone, setTelefone] = useState({ value: '', error: '' })
    const [cep , setCep] = useState({ value: '', error: '' })
    const [logradouro , setLogradouro] = useState({ value: '', error: '' })
    const [numero , setNumero] = useState({ value: '', error: '' })
    const [bairro , setBairro] = useState({ value: '', error: '' })
    const [municipio , setMunicipio] = useState({ value: '', error: '' })
    const [uf , setUf] = useState({ value: '', error: '' })
    const [complemento , setComplemento] = useState({ value: '', error: '' })
    const { newClient } = useContext(AuthContext);



    const navigation = useNavigation();
    
    function handleGoBack() {
        navigation.goBack();    
    }

    return(
        
        <VStack flex={1} bg='white'>
            <HeaderRegister title='Novo Cliente' onPress={handleGoBack} />

        <ScrollView>
            <VStack alignItems='center' mt={2}>
                <IdentificationBadge size={75} color='#424a5f' />
            </VStack>

            <Input placeholder="Nome" 
                mt={15} 
                h={h} 
                ml={m}
                mr={m}
                onChangeText={setNome}
                _focus= {focus}
            />

                <Input placeholder="Email" 
                    mt={15}
                    h={h}
                    ml={m}
                    mr={m}
                    onChangeText={setEmail}
                    _focus= {focus}
                />
                <Input placeholder="Telefone" 
                    mt={15} 
                    h={h}
                    ml={m}
                    mr={m} 
                    onChangeText={setTelefone}
                    _focus= {focus}
                />

            <HStack flex={1} w='full'>
                <Input placeholder="Cep" 
                    mt={15} 
                    h={h} 
                    ml={m}
                    mr={m-3}
                    w='42%'
                    onChangeText={setCep}
                    _focus= {focus}
                /> 
                
                <Input placeholder="Municipio" 
                    mt={15} 
                    h={h}
                    w='43%'
                    onChangeText={setMunicipio}
                    _focus= {focus}
                />            
           </HStack>

           <HStack flex={1} w='full'>
                <Input placeholder="Logradouro" 
                    mt={15} 
                    h={h} 
                    ml={m}
                    mr={m}
                    w='55%'
                    onChangeText={setLogradouro}
                    _focus= {focus}
                />

                <Input placeholder="Numero" 
                    mt={15} 
                    h={h} 
                    ml={-3}
                    mr={m}
                    w='30%'
                    onChangeText={setNumero}
                    _focus= {focus}
                />
            </HStack>

            <Uf setService={setUf} />

            <Input placeholder="Bairro" 
                    mt={15} 
                    h={h} 
                    ml={m}
                    mr={m}
                    
                    onChangeText={setBairro}
                    _focus= {focus}
            />

        
            <Input placeholder="Complemento" 
                mt={15} 
                h={h} 
                ml={m}
                mr={m}
                onChangeText={setComplemento}
                _focus= {focus}
            />

            <Button 
                mt='5
                '
                bg='#D63D2C'
                ml={m}
                mr={m}
                mb={10}
                _pressed={{
                    backgroundColor: '#D63D1C'
                }}
                onPress={() => { newClient(nome, email, telefone, cep, municipio, logradouro, numero, bairro, uf, complemento) }}
            >
                {/*  */}
                <Text
                    color='white'
                > 
                Cadastrar
                </Text>
            </Button>
            </ScrollView>

        </VStack>
    )
}
