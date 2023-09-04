import {FormControl, HStack} from "native-base";
import React, {FC} from "react";
import WrapperComponent from "../../../../common/interfaces/wrapperComponent";
import CustomInputProps from "../../../../common/interfaces/customInputProps";
import {err} from "react-native-svg/lib/typescript/xml";

interface Props{
    error?: string
}

const InputContainer: FC<WrapperComponent & CustomInputProps & Props> = ({children, label, error}) =>{
    return (
        <FormControl isInvalid={!!error}>
            {label && <FormControl.Label _text={{color: 'blue.primary', fontSize: '14px', fontWeight: 'bold'}}>
                {label}
            </FormControl.Label>}
            <HStack alignItems={'center'} space={1}>
                {children}
            </HStack>
            <FormControl.ErrorMessage>
                {error}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

export default InputContainer
