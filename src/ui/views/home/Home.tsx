import {Box, Divider, FlatList, Text, VStack} from "native-base";
import {SafeAreaView} from "react-native";
import Header from "./components/Header";
import {FC, useCallback, useMemo} from "react";
import HomeOption from "./interfaces/homeOption";
import {NavigatorScreenProps} from "../../../common/types/navigator/NavigatorScreenProps";
import OptionItem from "./components/OptionItem";
import RoundedCard from "../../common/components/RoundedCard/RoundedCard";
import ViewContainer from "../../common/components/ViewContainer/ViewContainer";

const Home: FC<NavigatorScreenProps<'Home'>> = ({navigation})=>{
    const options = useMemo(()=>{
        const result: HomeOption[] = [
            {
                label: 'Solicitar préstamo',
                icon: 'point-of-sale',
                action: () => navigation.navigate('RequestLoan')
            },
            {
                label: 'Abrir cuenta de ahorro',
                icon: 'payments',
                action: () =>{}
            }
        ]

        return result
    },[])

    return (
        <ViewContainer>
            <VStack space={10} pt={10} pb={5}>
                <Header/>
                <Text textAlign={'center'} variant={'title'}>
                    Solicita tu producto
                </Text>
            </VStack>
            <RoundedCard>
                <FlatList ItemSeparatorComponent={Divider} data={options} renderItem={OptionItem} mt={10}/>
            </RoundedCard>
        </ViewContainer>
    )
}

export default Home
