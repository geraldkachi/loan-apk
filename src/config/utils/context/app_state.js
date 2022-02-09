import React, {createContext, useState} from 'react';
import {StatusBar} from 'react-native';

export const AppStateContext = createContext();

export const AppStateProvider = ({children}) => {

  const [contextValue, setContextValue] = useState({context: true});

  const updateContext = data => {
    setContextValue(data);
  };

  return (
    <AppStateContext.Provider value={{contextValue, updateContext}}>
      {children}
    </AppStateContext.Provider>
  );
};
