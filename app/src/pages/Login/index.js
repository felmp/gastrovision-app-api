import { Title, 
         KeyboardView, 
         Container, 
         ButtonSubmit, 
         Input, 
         TextSubmit, 
         ButtonRegister, 
         TextResetPassword, 
         TextRegister,
         ButtonResetPassword } from "./styles";
import React, { useContext, useState } from "react";
import Header from '../../components/Header';
import { AuthContext } from "../../context/AuthContext";
import { Spinner, View } from "native-base";
import { useNavigation } from '@react-navigation/native';

function Login() {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const {isLoading, login} = useContext(AuthContext);
    const navigation = useNavigation();
    

    function handleCadastro() {
       return navigation.navigate('register');    

    }

    return (
            <KeyboardView>
                    <Header />
                    <Container>
                      {/* <Spinner visible={isLoading} /> */}
                        <Title> Entrar </Title>
                        <Input placeholder="Email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onChangeText={setEmail}
                        />
                        <Input placeholder="Password"
                            type="password"
                            returnKeyType="done"
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                        <ButtonSubmit onPress={() => { login(email, password) }}>
                            <TextSubmit>Entrar</TextSubmit>
                        </ButtonSubmit>
                        {/* <ButtonResetPassword>
                            <TextResetPassword>Esqueceu sua senha? | Recuperar</TextResetPassword>
                        </ButtonResetPassword> */}
                        {/* <ButtonRegister onPress={handleCadastro}>
                                <TextRegister>Cadastrar</TextRegister>
                        </ButtonRegister> */}
                    </Container>
            </KeyboardView>
    )
}

export default Login;

