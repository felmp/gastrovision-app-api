import styled from "styled-components/native";


export const KeyboardView = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #ECEEF6;
    position: absolute;
`

export const Title = styled.Text`
    color: #292759;
    font-size: 33px;
    font-weight: bold;
    margin-top: 10%;
    
`

export const Container = styled.View`

    align-items: center;
    flex: 1;
    justify-content: flex-start;
    background-color: #FAFAFA;
    width: 80%;
    border-radius: 20px;
    margin-bottom: 40%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Input = styled.TextInput`
    border: 2px solid #EAECEB;
    margin-top: 6%;
    padding: 15px 20px;
    color: #000;
    font-size: 17px;
    border-radius: 400px;
    width: 90%;
    text-align: center;

`

export const TextSubmit = styled.Text`
    color: #fff;
    font-size: 20px;
`

export const ButtonSubmit = styled.TouchableOpacity`
    margin-top: 10%;
    background-color: #D63D2C;
    width: 90%;
    height: 12%;
    border-radius: 400px;
    justify-content: center;
    align-items: center;

`

export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const TextResetPassword = styled.Text`
    align-items: center;
    justify-content: center;
    margin-top: 6%;
    font-weight: 500;
    color: #21344f;

`
export const ButtonResetPassword = styled.TouchableOpacity`
    font-size: 18px;
    margin-top: 6%;

`

export const ButtonRegister = styled.TouchableOpacity`
    margin-top: 30%;
    width: 90%;
    height: 12%;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 400px;
    border: 2px solid #21344f;


`


export const TextRegister = styled.Text`
    font-size: 20px;
    color: #424a5f;
    
`


