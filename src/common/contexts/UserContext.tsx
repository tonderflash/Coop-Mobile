import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, FC, useCallback, useContext, useEffect, useRef, useState,} from "react";

import {useQueryClient} from "@tanstack/react-query";
import LoginResponse from "../interfaces/login/loginResponse";
import WrapperComponent from "../interfaces/wrapperComponent";
import BaseHttpClient from "../../data/httpClient/httpClient";
import User from "../../data/models/user.model";
import {Alert} from "react-native";

interface UserContext {
  user: User;
  token: string | undefined;
  setLoggedUser: (loginResponse: LoginResponse) => void;
  removeLoggedUser: () => void;
}

const UserContext = createContext<UserContext | undefined>(undefined);

export const useUserContext = () => {
  return useContext(UserContext)!;
};

// This hook will protect the route access based on user authentication.

const UserContextProvider: FC<WrapperComponent> = ({ children }) => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();


  useEffect(() => {
    const retrieveLoggedUser = async () => {
      const storedLogin = await AsyncStorage.getItem("loginResponse");

      if (storedLogin) {
        setLoggedUser(JSON.parse(storedLogin));
      }

      setLoading(false);
    };

    retrieveLoggedUser();
  }, []);

  const setLoggedUser = useCallback( (loginResponse: LoginResponse) => {
    setUser(loginResponse.user);
    storeLoggedUser(loginResponse);
    setBearerToken(loginResponse.jwt);
  }, []);

  const removeLoggedUser = () => {
    Alert.alert("Cerrar sesión", 'Está seguro de que desea cerrar sesión?', [
      {
        text: 'Confirmar',
        onPress: logout
      },
      {
        text: 'Cancelar',
        onPress: ()=>{}
      }
    ])
  };

  const logout = () =>{
    setBearerToken(undefined);
    setUser(undefined);
    unStoreLoggedUser();
    queryClient.removeQueries();
  }

  const storeLoggedUser = (loginResponse: LoginResponse) => {
    AsyncStorage.setItem("loginResponse", JSON.stringify(loginResponse));
  };

  const unStoreLoggedUser = () => {
    AsyncStorage.removeItem("loginResponse");
  };

  const setBearerToken = (token: string | undefined) => {
    BaseHttpClient.setAuthHeader(token);
    setToken(token);
  };

  if (loading) {
    return null;
  }

  return (
    <UserContext.Provider
      value={{ token, setLoggedUser, user: user!, removeLoggedUser}}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
