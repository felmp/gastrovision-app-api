import { CheckIcon, Select } from 'native-base';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Uf = ({ service, setService }) => {
    return (
    
    
    <Select h={52} 
            mt='2'
            ml={3}
            mr={3}
            selectedValue={service}
            accessibilityLabel="UF" placeholder="UF" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
        }} onValueChange={itemValue => setService(itemValue)}>

            <Select.Item label="RO" value="RO" />
            <Select.Item label="AC" value="AC" />
            <Select.Item label="AM" value="AM" />
            <Select.Item label="RR" value="RR" />
            <Select.Item label="PA" value="PA" />
            <Select.Item label="AP" value="AP" />
            <Select.Item label="TO" value="TO" />
            <Select.Item label="MA" value="MA" />
            <Select.Item label="PI" value="PI" />
            <Select.Item label="CE" value="CE" />
            <Select.Item label="RN" value="RN" />
            <Select.Item label="PB" value="PB" />
            <Select.Item label="PE" value="PE" />
            <Select.Item label="AL" value="AL" />
            <Select.Item label="SE" value="SE" />
            <Select.Item label="BA" value="BA" />
            <Select.Item label="MG" value="MG" />
            <Select.Item label="ES" value="ES" />
            <Select.Item label="RJ" value="RJ" />
            <Select.Item label="SP" value="SP" />
            <Select.Item label="PR" value="PR" />
            <Select.Item label="SC" value="SC" />
            <Select.Item label="RS" value="RS" />
            <Select.Item label="MS" value="MS" />
            <Select.Item label="MT" value="MT" />
            <Select.Item label="GO" value="GO" />
            <Select.Item label="DF" value="DF" />

    </Select>
    
    
    )
}

export default Uf;