import { Alert, Center, Divider, HStack, Stack, Text, VStack } from 'native-base';
import React from 'react';

const AlertBadge = () => {

    const getTextColor = variant => {
        switch (variant) {
          case "left-accent":
          case "top-accent":
          case "subtle":
            return "coolGray.800";
    
          case "solid":
            return "warmGray.50";
        }
      };

    return <Center>
    <Stack space={3} w="90%" maxW="400">
            <Text bold fontSize="xl" mb="4" textAlign="center">
              {key}
            </Text>
            <Alert w="100%" variant='solid' colorScheme="success" status="success">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                  <HStack space={2} flexShrink={1} alignItems="center">
                    <Alert.Icon />
                    <Text color='white'>
                      Selection successfully moved!
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </Alert>
            <Divider mt="5" mb="2.5" />
    </Stack>
  </Center>
}

export default AlertBadge;