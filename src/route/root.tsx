import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './auth';
import DashboardTab from './dashboard_nav';

// import Welcome from '../screens/auth/welcome/welcome';
import OnBoard from '../screens/auth/on-board/onboard';
import {ThemeProvider} from '../config/utils/context/ThemeManager';

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [token, setToken] = React.useState(null);

  // React.useEffect(() => {
  //   setTimeout(async () => {
  //     //
  //     //onesignal initialization check
  //     let tokenValue = await GetDataFromStorage('token');
  //     //setIsLoading(!isLoading);
  //     setToken(tokenValue);
  //     console.log(tokenValue);
  //   }, 1000);
  // }, []);

  return (
    <RootStack.Navigator initialRouteName="DashboardTab">
      <RootStack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="DashboardTab"
        component={DashboardTab}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
};
