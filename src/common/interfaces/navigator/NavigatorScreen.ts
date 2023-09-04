import {FC} from "react";

export default interface NavigatorScreen<T, OptionsType> {
    name: keyof T;
    component: FC<any>;
    options?: OptionsType;
}
