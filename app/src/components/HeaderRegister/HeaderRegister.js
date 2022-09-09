import { Heading, HStack, IconButton, VStack } from "native-base";
import { CaretLeft } from 'phosphor-react-native'

export function HeaderRegister({title, onPress}){
    return(   
            <HStack
                w='full'
                justifyContent='space-between'
                alignItems='center'
                bg='#D63D2C'
                pb='4'
                pt='12'
            >

                <IconButton left='3' onPress={onPress} icon={<CaretLeft color='white' size={24} />} />

                <Heading 
                    color='white' 
                    textAlign='center'
                    fontSize='lg'
                    flex={1}
                    ml={-12}
                >
                    {title}
                </Heading>

            </HStack>
    )
}
