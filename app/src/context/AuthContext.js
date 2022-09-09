import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import axios from 'axios';
import React, {createContext, useState} from 'react';
import { Alert } from 'react-native';
import { BASE_URL, BASE_URL2 } from '../config';
import * as RootNavigation from '../routes/RootNavigation';

export const AuthContext = createContext("");



export const AuthProvider = ({children}) => {
    const navigationRef = useNavigationContainerRef();
    const [userInfo, setUserInfo] = useState({});
    const [products, setProducts] = useState();
    const [clients, setClients] = useState([]);
    const [clientesPopulated, setClientesPopulated] = useState();
    const [estoques, setEstoques] = useState([]);
    const [locais, setLocais] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
        
    const login = (email, password) => {
        // setIsLoading(true);
        axios.post(`${BASE_URL}/login`, {
            email, password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            // setIsLoading(false);
        }).catch(e => {
            console.log(JSON.stringify(e));
            Alert.alert('Login', 'Email e/ou senha incorretos.', [
                {text: 'ok'}
            ])
            // setIsLoading(false);
        });
    };

    const newClient = (nome, email, telefone, cep, municipio, logradouro, numero, bairro, uf, complemento) => {
        axios.post(`${BASE_URL}/client`, {
            nome, email, telefone, cep, logradouro, municipio, numero, bairro, uf, complemento
        }).then(res => {
            console.log('realizado');
            Alert.alert('Cliente', 'Seu cliente foi cadastrado com sucesso.', [
                {text: 'ok', onPress: () => RootNavigation.navigate('home') }
            ])
        }).catch(e => {
            console.log('nao realizado');
            console.log(e);
            // setIsLoading(false);
        });

    }  
 
    const newOperator = (nome, email, telefone, senha) => {
        axios.post(`${BASE_URL}/user`, {
            nome, email, telefone, senha
        }).then(res => {
            Alert.alert('Registrar', 'Usuario cadastrado com sucesso.', [
                {text: 'ok', onPress: () => RootNavigation.navigate('login') }
            ])
        }).catch(e => {
            Alert.alert('Registrar', 'Não foi possivel realizar seu cadastro.', [
                {text: 'ok', onPress: () => RootNavigation.navigate('register') }
            ])
            console.log(e);
            // setIsLoading(false);
        });

    }

    const product = () => {
        axios.get(`${BASE_URL}/product`)
        .then(res => {
            let a = res.data; 
            setProducts(a) 
            // console.log(res.data);
        })
        .catch(error => { 
            console.log(error) 
        })

    }
        
    const client = () => {
        axios.get(`${BASE_URL}/client`)
        .then(res => {
            let a = []; 
            let b = res.data;
            
            a = b.map(e => ({
                id: e.id,
                nome: e.nome
              })
            );
            setClients(a)
            // console.log(clients);
        })
        .catch(error => { 
            console.log(error) 
        })

    }
    
    const selectEstoque = () => {
        axios.get(`${BASE_URL}/estoques`)
        .then(res => {
            let b = res.data;
            let a = []; 

            a = b.map(e => ({
                id: e.id,
                nome: e.local
              })
            );
            
            setEstoques(a)
            setLocais(res.data)
              
            // console.log(a);
        })
        .catch(error => { 
            console.log(error) 
        })

    }

    const requestProduct = (cliente_id, estoque_id, produto_id, quantidade_produto, descricao, titulo) => {

        axios.get(`${BASE_URL}/estoque_produto`)
             .then(res => { 
                
                res.data.forEach(element => {
                    if(element.estoque_id == estoque_id && element.produto_id == produto_id && element.quantidade_produto >= quantidade_produto) 
                    {
                        axios.post(`${BASE_URL}/fazer_pedido`, {
                            cliente_id, estoque_id, produto_id, quantidade_produto, descricao, titulo
                        }).then(res => {
                            Alert.alert('Solicitação', 'Pedido solicitado com sucesso', [
                                {text: 'ok', onPress: () => RootNavigation.navigate('products') }
                            ])
                        }).catch(e => {
                            Alert.alert('Solicitação', 'Não foi possivel realizar seu pedido', [
                                {text: 'ok', onPress: () => RootNavigation.navigate('products') }
                            ])
                            setIsLoading(false);
                        });
                    } else {
                        Alert.alert('Solicitação', 'Valor acima do possuido no estoque', [
                            {text: 'ok' }
                        ])
                    }
                });
            })
             .catch(error => {
                Alert.alert('Solicitação', 'Não foi possivel realizar seu pedido', [
                    {text: 'ok', onPress: () => RootNavigation.navigate('products') }
                ])
            })





    }
    
    

    
    return (
        <AuthContext.Provider value={{
            isLoading,
            userInfo,
            login,
            newClient,
            newOperator,
            products,
            product,
            client,
            clients,
            selectEstoque,
            estoques,
            locais,
            requestProduct
        }}>
          {children}    
        </AuthContext.Provider>

        )
}