import {FC} from "react";
import {ListRenderItemInfo, TouchableOpacity} from "react-native";
import HomeOption from "../interfaces/homeOption";
import {HStack, Icon, Text} from "native-base";

const OptionItem: FC<ListRenderItemInfo<HomeOption>> = ({item: option})=>{
    return(
        <TouchableOpacity onPress={option.action}>
            <HStack py={4} px={4} justifyContent={'space-between'}>
                <HStack space={2}>
                    <Icon name={option.icon}/>
                    <Text>{option.label}</Text>
                </HStack>
                <Icon name={'arrow-forward-ios'} size={'lg'}/>
            </HStack>
        </TouchableOpacity>
    )
}

export default OptionItem
