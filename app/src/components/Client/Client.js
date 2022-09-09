import { CheckIcon, Select } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';

const Client = ({ service, setService }) => {


    return (
    
    
    <Select h={52} 
            mt='2'
            ml={3}
            mr={3}
            // selectedValue={service}
            accessibilityLabel="Cliente" placeholder="Cliente" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
        }} 
        onValueChange={itemValue => setService(itemValue)}
        >
                    <Select.Item label="AC" value="AC" />

    </Select>
    
    
    )
}

export default Client;