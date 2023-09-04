import {Box, HStack, Icon, IconButton, Text} from "native-base";
import {useUserContext} from "../../../../common/contexts/UserContext";
import moment from "moment";

const Header = () =>{
    const {user, removeLoggedUser} = useUserContext()

    return(
        <HStack w={'full'} justifyContent={'space-between'} alignItems={'start'} px={5}>
            <IconButton icon={<Icon name={"menu"} color={'white'}/>}/>
            <Box alignItems={'center'}>
                <Text color={'white'} bold>
                    Buenas tardes, {user.name}
                </Text>
                <Text color={'white'} bold>
                    {moment().format('D [de] MMMM [de] YYYY')}
                </Text>
                <IconButton onPress={removeLoggedUser} icon={<Icon name={'logout'} color={'white'}/>}/>
            </Box>
            <IconButton icon={<Icon name={'support-agent'} color={'white'}/>}/>
        </HStack>
    )
}

export default Header
