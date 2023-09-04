import {Linking, SafeAreaView, TouchableOpacity} from "react-native";
import {Box, Button, Image, Input, Text, VStack} from "native-base";
import {Formik} from "formik";
import InputComponent from "../../common/components/Input/InputComponent";
import {object, string} from "yup";
import LoginRequest from "../../../common/interfaces/login/loginRequest";
import {FC, useCallback} from "react";
import useLoginMutation from "../../../common/hooks/mutations/loginMutation";
import {useUserContext} from "../../../common/contexts/UserContext";
import {NavigatorScreenProps} from "../../../common/types/navigator/NavigatorScreenProps";

const Login: FC<NavigatorScreenProps<'Login'>> = ({navigation}) => {
    const loginMutation = useLoginMutation()
    const {setLoggedUser} = useUserContext()

    const handleSubmit = useCallback(async (values: LoginRequest)=>{
        try {
            const response = await loginMutation.mutateAsync(values)

            setLoggedUser(response!)
        }catch (e) {
            console.log(e)
        }
    }, [])

    const goToForgotPassword = useCallback(()=>{
        Linking.openURL("https://virtual.coopbarcelona.com/acceso")
    }, [])

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <VStack py={50} px={5} space={10}>
                <VStack alignItems={'center'}>
                    <Box alignItems={'center'}>
                        <Text color={'gray.dark'} fontSize={'20px'}>
                            Bienvendio devuelta.
                        </Text>
                        <Text color={'gray.dark'} fontSize={'20px'}>
                            Te estábamos esperando!
                        </Text>
                    </Box>
                    <Image source={require('../../../../assets/img/piggy-bank.png')} alt={'piggy_bank'}/>
                </VStack>
                <Formik initialValues={{
                    id_card: '',
                    password: ''
                }} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    {(formik)=>(
                        <VStack space={16}>
                            <VStack space={2}>
                                <InputComponent placeholder={'Ingresa tu cédula'} name={'id_card'}/>
                                <InputComponent placeholder={'Ingresa tu contraseña'} name={'password'} type={"password"}/>
                                <TouchableOpacity style={{marginTop: 8}} onPress={goToForgotPassword}>
                                    <Text>
                                        ¿Olvidaste tu contraseña?
                                    </Text>
                                </TouchableOpacity>
                            </VStack>
                            <VStack alignItems={'center'} space={5}>
                                <Button onPress={formik.submitForm} bg={'primary'} w={'full'} borderRadius={'8px'} _text={{bold: true, fontSize: '20px'}}>
                                    Siguiente
                                </Button>
                                <TouchableOpacity onPress={navigation.goBack}>
                                    <Text color={'primary'} bold>
                                        Atrás
                                    </Text>
                                </TouchableOpacity>
                            </VStack>
                        </VStack>
                )}
                </Formik>
            </VStack>
        </SafeAreaView>
    )
}

const validationSchema = object({
    id_card: string().required(),
    password: string().required()
})

export default Login
