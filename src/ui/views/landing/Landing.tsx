import {Button, Center, HStack, Text, VStack, Image} from "native-base";
import {Linking, SafeAreaView, TouchableOpacity} from "react-native";
import theme from "../../../common/constants/theme";
import {FC, useCallback} from "react";
import {NavigatorScreenProps} from "../../../common/types/navigator/NavigatorScreenProps";

const Landing: FC<NavigatorScreenProps<'Landing'>> = ({navigation}) =>{
    const goToLogin = useCallback(()=>{
        navigation.navigate('Login')
    },[])

    const goToRegister = useCallback(()=>{
        Linking.openURL('https://virtual.coopbarcelona.com/registro')
    },[])

    return (
        <SafeAreaView style={{flex: 1}}>
                <Center flex={1}>
                    <VStack space={100}>
                        <Image source={require('../../../../assets/img/white-logo.png')} alt={'logo'}/>
                        <VStack alignItems={'center'} space={4}>
                            <Button bg={'primary'} w={'full'} _text={{bold: true}} borderRadius={'7px'} onPress={goToLogin}>
                                Inicia sesión
                            </Button>
                            <HStack space={2}>
                                <Text bold>
                                    No estás afiliado?
                                </Text>
                                <TouchableOpacity onPress={goToRegister}>
                                    <Text color={theme.colors.primary} bold>
                                        Afíliate aquí
                                    </Text>
                                </TouchableOpacity>
                            </HStack>
                        </VStack>
                    </VStack>
                </Center>
            </SafeAreaView>
    )
}

export default Landing
