import { Button, Input, VStack, Text, Select, CheckIcon, ScrollView, HStack} from "native-base";
import { HeaderRegister } from "../../components/HeaderRegister/HeaderRegister";
import { useNavigation } from "@react-navigation/native";
// import Client from "../../components/Client/client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export function RequestProduct({route}){
    const [titulo, setTitulo] = useState({ value: '', error: '' })
    const [data, setData] = useState({ value: '', error: '' })
    const [nomeVendedor, setNomeVendedor] = useState({ value: '', error: '' })
    const [cliente , setCliente] = useState({ value: '', error: '' })
    const [quantidade , setQuantidade] = useState({ value: '', error: '' })
    const [observacao , setObservacao] = useState({ value: '', error: '' })
    const [estoque , setEstoque] = useState({ value: '', error: '' })
    const { clients, userInfo, client, selectEstoque, estoques, requestProduct } = useContext(AuthContext);

    const h = 75;
    const m = 6;
    const focus = {
        borderWidth: 2,
        borderColor: '#424a5f',
        backgroundColor: 'white',
    }


    const navigation = useNavigation();
    
    function handleGoBack() {
        navigation.goBack();    
    }

    function getDate() {
            var day = new Date().getDate();
            var month = new Date().getMonth() + 1;
            var year = new Date().getFullYear();

            if(day <= 9) {
                if(month <= 9){
                    return '0'+day + '/' +'0'+ month + '/' + year; 
                } else {
                    return day + '/' + month + '/' + year; 
                }
            } else {
                return day + '/' + month + '/' + year; 
            }

    }

    useEffect(() => {
        (async function (){
            client();
            setNomeVendedor(userInfo.usuario[0]['nome'])
            setTitulo('Pedido');
            selectEstoque();
            // console.log();


        })();


    }, []);


    return(
        <VStack flex={1} bg='white'>
         <HeaderRegister title='Solicitar produto' onPress={handleGoBack} />
            <ScrollView>
                <Input placeholder="Titulo" 
                    mt={15} 
                    h={h} 
                    ml={m}
                    mr={m}
                    onChangeText={setTitulo}
                    value={titulo}
                    _focus= {focus}
                />

                <Input placeholder="Data" 
                    mt={15} 
                    h={h}
                    ml={m}
                    mr={m}
                    value={getDate()}
                    _focus= {focus}
                />

                <Input placeholder="Nome do vendedor" 
                    mt={15}
                    h={h}
                    ml={m}
                    mr={m}
                    value={nomeVendedor}
                    _focus= {focus}
                />

            <Select h={h} 
                mt='2'
                ml={3}
                mr={3}
                accessibilityLabel="Cliente" placeholder="Cliente" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />
                }} 
                onValueChange={itemValue => setCliente(itemValue)}
                key={clients.id}
                >
                {
                clients.map(cr => {
                    return <Select.Item label={cr.nome} value={cr.id} />
                    })
                }

                </Select>
                
            <HStack>
                <Select h={h} 
                        mt='2'
                        ml={3}
                        mr={3}
                        w='227%'
                        accessibilityLabel="Estoque" 
                        placeholder="Estoque" 
                        _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size={5} />
                            }}
                            onValueChange={itemValue => setEstoque(itemValue)}
                            key={estoque.id}
                    >
                    {
                        estoques.map(cr => {
                        return <Select.Item label={cr.nome} value={cr.id} />
                        })
                    }

                    </Select>

                    <Input placeholder="Quantidade de produtos" 
                        mt={15} 
                        h={h} 
                        ml={m+100}
                        mr={m}
                        onChangeText={setQuantidade}
                        _focus= {focus}
                        w='41%'
                    />
                 </HStack>
    
                <Input placeholder="Observação" 
                    mt={15} 
                    h={h} 
                    ml={m}
                    mr={m}
                    onChangeText={setObservacao}
                    _focus= {focus}
                />

                <Button 
                    mt='10'
                    bg='#D63D2C'
                    ml={m}
                    mr={m}
                    mb={10}
                    _pressed={{
                        backgroundColor: '#D63D1C'
                    }}
                    onPress={() => { requestProduct(cliente, estoque, route.params.paramKey, quantidade, observacao, titulo) }}
                >
                    
                    <Text
                        color='white'
                    > 
                        Realizar pedido
                    </Text>
                </Button>
            </ScrollView>
        </VStack>
    )
}
