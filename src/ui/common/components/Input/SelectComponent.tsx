import InputContainer from "./InputContainer";
import {FC} from "react";
import CustomInputProps from "../../../../common/interfaces/customInputProps";
import {ISelectProps, Select} from "native-base";
import KeyValue from "../../../../common/interfaces/keyValue";
import {useField} from "formik";

interface Props{
    options: KeyValue[]
}

const SelectComponent: FC<CustomInputProps & Props & ISelectProps> = ({label, options, onValueChange, name, ...props}) =>{
    let fieldData
    if(name)
        fieldData = useField(name)

    const fieldProps = fieldData ? {borderColor: fieldData[1].error && 'red.600', onValueChange: (value) => {
        fieldData[2].setValue(value)
        if (onValueChange){
            onValueChange(value)
        }
        }} : {}

    return (
        <InputContainer label={label}>
            <Select {...props} {...fieldProps} w={'full'} flex={1} h={50} color={'gray.medium'}>
                {
                    options.map((option, index) => (
                        <Select.Item key={index} label={option.key} value={option.value}/>
                    ))
                }
            </Select>
        </InputContainer>
    )
}
export default SelectComponent
