import React, {FC} from 'react';
import {Icon, IInputProps, Input} from "native-base";
import PasswordInput from "./PasswordInput";
import {useField} from "formik";
import CustomInputProps from "../../../../common/interfaces/customInputProps";
import InputContainer from "./InputContainer";



const InputComponent: FC<CustomInputProps & IInputProps> = ({label, name, onChangeText, ...props}) => {
    let fieldData = name ? useField(name) : undefined

    const fieldProps = fieldData ? {borderColor: fieldData[1].error && 'red.600', onChangeText: (value: string)=>{
            fieldData![2].setValue(value)
            if (onChangeText){
                onChangeText(value)
            }
        }} : {}

    return (
        <InputContainer label={label} error={fieldData[1].error}>
            {props.type == 'password' ? <PasswordInput w={'full'} h={50} borderRadius={'8px'} {...props} {...fieldProps}/> :
                <Input w={'full'}  h={50} borderRadius={'8px'} {...props}  {...fieldProps}/>}
            {(fieldData && fieldData[1].error) && <Icon flex={1} name={"info"} color={'red'}/>}
        </InputContainer>
    );
};

export default InputComponent;
