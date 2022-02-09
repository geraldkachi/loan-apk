import React from 'react';
import LogIn from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import colors from '../config/utils/colors';
import OtpVerify from '../screens/auth/otp_verification';
import ForgotPassword from '../screens/auth/forgot_password';
import {createStackNavigator} from '@react-navigation/stack';

export type AuthStackParams = {
  LogIn;
  SignUp;
  OtpVerify;
  ForgotPassword;
};
const AuthStack = createStackNavigator<AuthStackParams>();
export default () => (
  <AuthStack.Navigator initialRouteName="LogIn">
    <AuthStack.Screen
      name="LogIn"
      component={LogIn}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />
    <AuthStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />

    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />

    <AuthStack.Screen
      name="OtpVerify"
      component={OtpVerify}
      options={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: colors.black,
      }}
    />
  </AuthStack.Navigator>
);
