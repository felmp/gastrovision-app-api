import { Button, Heading, IconButton, Text, View } from "native-base";

export function ButtonHome({ onPress, title, colorButton, icon, variant }) {
    return (
        <View ml='3'>
            <IconButton
                width='20'
                height='20'
                rounded='full'
                backgroundColor={colorButton}
                icon={icon}
                variant={variant}
                borderColor='#D63D2C'
                onPress={onPress}
                _pressed={{
                    opacity: 10,
                }}
            >

            </IconButton>
            
            <Text
                color='black'
                textAlign='center'
                fontSize='sm'
            >{title}</Text>

        </View>


    )
}