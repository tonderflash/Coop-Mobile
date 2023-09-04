import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {useUserContext} from "../../../common/contexts/UserContext";
import useMainNavigatorScreens from "./Screens";
import NavigatorScreens from "../../../common/types/navigator/NavigatorScreens";

const Stack = createNativeStackNavigator<NavigatorScreens>();

const MainNavigator = () => {
  const { token, user, removeLoggedUser } = useUserContext();
  const mainNavigatorScreens = useMainNavigatorScreens();

  const screensToRender = (token)
    ? mainNavigatorScreens.authScreens
    : mainNavigatorScreens.publicScreens;

  return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
      >
        {screensToRender.map((screen, index) => (
          <Stack.Screen key={index} {...screen} />
        ))}
      </Stack.Navigator>
  );
};

export default MainNavigator;
