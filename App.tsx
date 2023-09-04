import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {NativeBaseProvider} from "native-base";
import theme from "./src/common/constants/theme";
import UserContext from "./src/common/contexts/UserContext";
import MainNavigator from "./src/ui/navigation/MainNavigator/MainNavigator";
import {NavigationContainer} from "@react-navigation/native";
import 'moment/locale/es'


const queryClient = new QueryClient()

const App = () =>{
    return(
        <QueryClientProvider client={queryClient}>
            <NativeBaseProvider theme={theme}>
                <NavigationContainer>
                    <UserContext>
                            <MainNavigator/>
                    </UserContext>
                </NavigationContainer>
            </NativeBaseProvider>
        </QueryClientProvider>
    )
}

export default App
