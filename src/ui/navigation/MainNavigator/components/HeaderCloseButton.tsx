import React, {FC} from 'react';
import {Icon, IIconProps} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {HeaderButtonProps} from "@react-navigation/native-stack/lib/typescript/src/types";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native";

interface Props{
    _iconProps?: IIconProps
}

const HeaderCloseButton: FC<HeaderButtonProps & Props> = ({_iconProps}) => {
    const navigation = useNavigation<NavigationProp<any>>()

    return (
        <TouchableOpacity onPress={navigation.goBack}>
            <Icon as={MaterialIcons} name={'close'} color={'white'} size={'xl'} {..._iconProps}/>
        </TouchableOpacity>
    );
};

export default HeaderCloseButton;
