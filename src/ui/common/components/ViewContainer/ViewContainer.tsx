import {SafeAreaView} from "react-native";
import {Box} from "native-base";
import WrapperComponent from "../../../../common/interfaces/wrapperComponent";
import {FC} from "react";

const ViewContainer: FC<WrapperComponent> = ({children}) =>{
    return (
        <SafeAreaView style={{flex: 1}}>
            <Box flex={1} bg={'primary'}>
                {children}
            </Box>
        </SafeAreaView>
    )
}

export default ViewContainer
