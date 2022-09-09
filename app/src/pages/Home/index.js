import { HStack, IconButton, Input, Text, VStack, Icon, ButtonNativeBase, Heading } from "native-base";
import { List, User, MagnifyingGlass, UserPlus, Archive, Globe } from "phosphor-react-native";
import { ButtonHome } from "../../components/ButtonHome";
import { Footer } from "../../components/Footer/Footer";


export function Home() {
    return(
        <VStack flex={1} pb={6} backgroundColor='#ECEEF6'>
            <HStack w='full'
                    pt={12}
                    pb={155}
                    roundedBottom={60}
                    px={4}
                    bg="#D63D2C"
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <IconButton icon={<List size={30} color="#FAFAFA" weight="bold" />} />
                    <IconButton icon={<User size={30} color="#FAFAFA" weight="bold" />} />                
            </HStack>
            <VStack px={7} mt="-30%">
                <Input w='full' 
                color='#9A989B' 
                placeholder='Buscar...'
                backgroundColor='white'
                placeholderTextColor='#9A989B'
                InputLeftElement={<Icon as={<MagnifyingGlass size={20} color='#9A989B' />} ml='2' color='#9A989B' />}
                _focus={{
                    borderWidth: 1,
                    borderColor: 'white',
                    backgroundColor: 'white',
                }}/>
            </VStack>

            <HStack 
                backgroundColor='#FAFAFA'
                width='full'
                height='120'
                mt='20'
                rounded='20'
                justifyItems='center'     
                alignItems='center'
            >
                <ButtonHome colorButton='#D63D2C' title='Novo cliente' icon={<UserPlus size={30} color="#FAFAFA"/>}/>
                <ButtonHome colorButton='white' variant='outline' title='Produtos' icon={<Archive size={30} color="#D63D2C"/>}/>
                <ButtonHome colorButton='white' variant='outline' title='Lugares' icon={<Globe size={30} color="#D63D2C"/>}/>
                <ButtonHome colorButton='white' variant='outline' title='Lorem' />
            </HStack>
            <Text>TESTE</Text>
            <Footer />

        </VStack>
    )

}