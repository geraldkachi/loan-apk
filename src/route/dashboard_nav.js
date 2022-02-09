import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/home/dashboard';
import HomeIcon from '../assets/dashboard/nav/home';
import MoreIcon from '../assets/dashboard/nav/more';
import LoanIcon from '../assets/dashboard/nav/loan';
import TransactionIcon from '../assets/dashboard/nav/transaction';

const AppTabs = createBottomTabNavigator();
export default () => (
  <AppTabs.Navigator drawerType="slide" initialRouteName="Dashboard">
    <AppTabs.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarIcon: () => <HomeIcon />,
        tabBarLabel: '',
        headerTitle: '',
        headerTransparent: true,
      }}
    />
    <AppTabs.Screen
      name="Loans"
      component={Dashboard}
      options={{
        tabBarIcon: () => <LoanIcon />,
      }}
    />

    <AppTabs.Screen
      name="Transactions"
      component={Dashboard}
      options={{
        tabBarIcon: () => <TransactionIcon />,
      }}
    />
    <AppTabs.Screen
      name="more"
      component={Dashboard}
      options={{
        tabBarIcon: () => <MoreIcon />,
      }}

      // listeners={({navigation}) => ({
      //   tabPress: (event) => {
      //     event.preventDefault();
      //     navigation.navigate('MoreStackScreen');
      //   },
      // })}
    />
  </AppTabs.Navigator>
);
