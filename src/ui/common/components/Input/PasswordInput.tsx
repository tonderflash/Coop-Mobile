import React, {FC} from 'react';
import {Icon, IInputProps, Input} from "native-base";
import {TouchableOpacity} from "react-native";
import useToggle from "../../../../common/hooks/useToggle";

const PasswordInput: FC<IInputProps> = (props) => {
    const [show, toggleShow] = useToggle()

    return (
        <Input  {...props} type={show ? 'text' : "password"} InputRightElement={<TouchableOpacity style={{paddingRight: 10}} onPress={() => toggleShow()}>
            <Icon variant={"input"} name={show ? "visibility-off" : "visibility"} color={"gray.dark"} size={"20px"}/>
        </TouchableOpacity>}/>
    );
};

export default PasswordInput;
