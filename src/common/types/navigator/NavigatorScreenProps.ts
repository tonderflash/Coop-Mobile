import {NavigatorRoute} from "./NavigatorRoute";
import {NativeStackScreenProps} from "@react-navigation/native-stack/lib/typescript/src/types";
import NavigatorScreens from "./NavigatorScreens";

export type NavigatorScreenProps<T extends NavigatorRoute> =
    NativeStackScreenProps<NavigatorScreens, T>;