import { HStack, IconButton } from "native-base";
import { House } from "phosphor-react-native";

export function Footer() {
    return(
    <HStack         
        w='full'
        h='100'
        mt='100%'
        backgroundColor='white'
        justifyContent='center'
        position='relative'
        >

            <IconButton 
            icon={<House size={30} color="#FAFAFA" weight="bold" />}  
            backgroundColor='#D63D2C' 
            rounded='full' 
            w='20'
            h='20'
            mt='-50'
            />

    </HStack>
)
}