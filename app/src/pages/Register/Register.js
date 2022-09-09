import { Title, 
    KeyboardView, 
    Container, 
    ButtonSubmit, 
    Input, 
    TextSubmit, 
    ButtonRegister, 
    TextResetPassword, 
    TextRegister,
    ButtonResetPassword } from "../Register/style";
import React, { useContext, useState } from "react";
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/AuthContext";


const Register = () => {
    const [nome, setNome] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [telefone, setTelefone] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const {newOperator} = useContext(AuthContext);

    const navigation = useNavigation();

    function handleLogin() {
        return navigation.navigate('login');    
 
     }

  return (
    <KeyboardView>
                    <Header />
                    <Container>
                        {/* <Spinner visible={isLoading} /> */}
                        <Title> Registrar </Title>
                        <Input placeholder="Nome"
                            keyboardType="default"
                            returnKeyType="next"
                            onChangeText={setNome}
                        /> 
                        <Input placeholder="Email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onChangeText={setEmail}
                        />                        
                        <Input placeholder="Telefone"
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            onChangeText={setTelefone}
                        />
                        <Input placeholder="Senha"
                            keyboardType="default"
                            returnKeyType="done"
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                        <ButtonSubmit onPress={() => { newOperator(nome, email, telefone, password) }}>
                            <TextSubmit>Cadastrar</TextSubmit>
                        </ButtonSubmit>
                        <ButtonResetPassword onPress={handleLogin}>
                            <TextResetPassword>Já possue conta? Clique aqui para entrar.</TextResetPassword>
                        </ButtonResetPassword>
                    </Container>
            </KeyboardView>
  )
}

export default Register;