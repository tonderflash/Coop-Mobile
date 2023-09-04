import {createRef, FC, useEffect, useMemo, useRef, useState} from "react";
import {NavigatorScreenProps} from "../../../common/types/navigator/NavigatorScreenProps";
import ViewContainer from "../../common/components/ViewContainer/ViewContainer";
import RoundedCard from "../../common/components/RoundedCard/RoundedCard";
import {Box, Button, Center, HStack, Select, Text, VStack} from "native-base";
import {Formik, FormikProps} from "formik";
import InputComponent from "../../common/components/Input/InputComponent";
import SelectComponent from "../../common/components/Input/SelectComponent";
import KeyValue from "../../../common/interfaces/keyValue";
import {number, object} from "yup";

const RequestLoan: FC<NavigatorScreenProps<'RequestLoan'>> = ()=>{
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [interest, setInterest] = useState(0.105)
    const [formValues, setFormValues] = useState({
        amount: 0,
        paymentTerm: 0
    })

    const terms = useMemo(()=>{
        const result: KeyValue[] = [{
            key: '3 meses',
            value: 3
        }]

        for (let i = 6; i <= 36 ; i = i+3) {
            result.push({
                key: `${i} meses`,
                value: i
            })
        }

        return result
    },[])

    const handleInputChange = (name: string, value: any)=>{
        setFormValues(prev => ({...prev, [name]: value}))
    }

    useEffect(()=>{
        if (formValues.amount && formValues.paymentTerm){
            const payments = (formValues.amount/formValues.paymentTerm) * interest

            setMonthlyPayment(payments)
        }
    },[formValues])

    const handleSubmit = (value) =>{
        console.log("SUBMIT",value)
    }

    return(
        <ViewContainer>
            <RoundedCard>
                <VStack flex={1} alignItems={'center'} py={20} space={10}>
                    <VStack alignItems={'center'} space={2}>
                        <Text bold color={'gray.medium'}>
                            Cuota mensual a pagar:
                        </Text>
                        <Text bold color={'gray.medium'} fontSize={'22px'}>
                            RD$: {new Intl.NumberFormat().format(monthlyPayment)}
                        </Text>
                        <HStack space={1}>
                            <Text fontSize={'10px'} bold>
                                Tasa de interés anual
                            </Text>
                            <Text fontSize={'10px'} bold color={'primary'}>
                                {new Intl.NumberFormat().format(interest * 100)}%
                            </Text>
                        </HStack>

                    </VStack>
                    <VStack>
                        <Formik validateOnChange={false} initialValues={{
                            amount: 0,
                            paymentTerm: 0
                        }} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            {(formik)=>{

                                return (
                                    <VStack space={6}>
                                        <VStack alignItems={'center'} space={5}>
                                            <Box>
                                                <Text color={'gray.medium'} bold fontSize={'16px'}>
                                                    Ingresa el monto de tu préstamo
                                                </Text>
                                                <Text color={'gray.medium'} bold fontSize={'9px'}>
                                                    Monto mínimo: RD$5,000 - Monto máximo: RD$100,000
                                                </Text>
                                            </Box>
                                            <InputComponent keyboardType={'numeric'} onChangeText={(value) => handleInputChange("amount", value)} name={'amount'} placeholder={'RD$ 10,000'}/>
                                        </VStack>
                                        <VStack space={5} alignItems={'center'}>
                                            <Text color={'gray.medium'} bold fontSize={'16px'}>
                                                Escoge el plazo de tu préstamo
                                            </Text>
                                            <SelectComponent onValueChange={(value) => handleInputChange("paymentTerm", value)} name={'paymentTerm'} options={terms} placeholder="Seleccione"/>
                                        </VStack>
                                        <Button onPress={formik.submitForm} mt={4} _text={{color: 'white', fontSize: '16px', bold: true}} bg={'primary'} borderRadius={'8px'}>
                                            Solicitar
                                        </Button>
                                    </VStack>
                                )
                            }

                            }
                        </Formik>
                    </VStack>
                </VStack>
            </RoundedCard>
        </ViewContainer>
    )
}

const validationSchema = object({
    amount: number().required().min(5000, "El monto mínimo es de 5,000 pesos").max(100000, "El monto máximo es de 100,000 pesos"),
    paymentTerm: number().required().min(3)
})

export default RequestLoan
