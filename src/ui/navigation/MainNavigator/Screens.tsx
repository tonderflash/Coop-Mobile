import {NativeStackNavigationOptions,} from "@react-navigation/native-stack/lib/typescript/src/types";
import Home from "../../views/home/Home";
import Login from "../../views/login/Login";
import Landing from "../../views/landing/Landing";
import NavigatorScreen from "../../../common/interfaces/navigator/NavigatorScreen";
import AuthScreens from "../../../common/types/navigator/AuthScreens";
import PublicScreens from "../../../common/types/navigator/PublicScreens";
import {NavigatorScreenProps} from "../../../common/types/navigator/NavigatorScreenProps";
import RequestLoan from "../../views/request-loan/RequestLoan";
import {Box, Text} from "native-base";
import HeaderChevronButton from "./components/HeaderChevronButton";

interface MainNavigatorAuthScreens {
  authScreens: NavigatorScreen<AuthScreens, NativeStackNavigationOptions | ((props: NavigatorScreenProps<any>) => NativeStackNavigationOptions)>[];
  publicScreens: NavigatorScreen<PublicScreens, NativeStackNavigationOptions | ((props: NavigatorScreenProps<any>) => NativeStackNavigationOptions)>[];
}


const useMainNavigatorScreens = () => {
  const mainNavigatorScreens: MainNavigatorAuthScreens = {
    authScreens: [
      {
        name: "Home",
        component: Home,
        options: {
          animation: 'slide_from_right'
        }
      },
      {
        name: "RequestLoan",
        component: RequestLoan,
        options: {
          animation: 'slide_from_right',
          headerShown: true,
          headerBackground: ()=>{
            return <Box bg={'primary'} h={'full'}>
            </Box>
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerTitle: () => <Text variant={'title'}>Solicitud de préstamo</Text>,
          headerLeft: () => <HeaderChevronButton/>,
          headerBackVisible: false
        }
      },
    ],
    publicScreens: [
      {
        name: "Landing",
        component: Landing,
      },
      {
        name: "Login",
        component: Login,
        options: {
          animation: 'slide_from_right',
        }
      }
    ],
  };

  return mainNavigatorScreens;
};
export default useMainNavigatorScreens;
