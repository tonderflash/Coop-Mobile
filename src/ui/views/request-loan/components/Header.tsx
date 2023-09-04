import {Box, Icon, IconButton, Text} from "native-base";
import {useNavigation} from "@react-navigation/native";

const Header = () =>{
    const navigation = useNavigation()

    return (
        <Box>
            <IconButton onPress={navigation.goBack} icon={<Icon name={'arrow-back-ios'} color={'white'}/>}/>
            <Text textAlign={'center'} variant={'title'}>Solicitud de préstamo</Text>
        </Box>
    )
}

export default Header
