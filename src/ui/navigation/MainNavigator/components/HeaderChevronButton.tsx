import React, {FC} from 'react';
import {Icon} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {StyleProp, TouchableOpacity, ViewStyle} from "react-native";
import {useNavigation} from "@react-navigation/native";

interface Props{
    orientation?: 'right' | 'left',
    onPress?: () => void
}

const HeaderChevronButton: FC<Props & {style?: StyleProp<ViewStyle>}> = ({orientation = 'left', style, onPress}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={ onPress ? onPress : navigation.goBack} style={style}>
            <Icon as={MaterialIcons} name={`chevron-${orientation}`} size={'2xl'} color={'white'}/>
        </TouchableOpacity>
    );
};

export default HeaderChevronButton;
