import React, {useState} from 'react';
import {StatusBar,StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
// import styles from './style';
import Banking from '../../../assets/onboard/banking';
import Wallet from '../../../assets/onboard/wallet';
import Wealth from '../../../assets/onboard/wealth';
import {Button, Box, Container,Text, View} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../../../config/utils/colors';
import Swiper from 'react-native-swiper';

const slides = [
  {
    key: '1',
    title: 'Fund Wallet',
    text: 'With ₦50 in your wallet, you stand a chance to win ₦500',
    //image: <Wallet />,
  },
  {
    key: '2',
    title: 'Study Hard; Take a Quiz',
    text: 'Take a ₦50 Quiz and get reward for your hard work',
    //image: <Banking />,
  },
  {
    key: '3',
    title: 'Every Student is a Winner',
    text: 'Get good grades, we pay you in kind or cash instantly',
    //image: <Wealth />,
  },
  {
    key: '4',
    title: 'Every Student is a Winner',
    text: 'Get good grades, we pay you in kind or cash instantly',
    //image: <Wealth />,
  },
];

// type SlideData = {
//   key: string;
//   text: string;
//   title: string;
//   //image: any;
// };

export default () => {
  //const navigation = useNavigation(); instead of passing navigation props in nested components

  // const renderItem = ({item}) => {
  //   console.log('i was here');
  //   return (
  //     //<Text style={{color: 'red'}}>ABCDEF</Text>
  //     <View style={styles.slide}>
  //       {/* <Image source={item.image} style={styles.image} /> */}
  //       <View style={styles.containerText}>
  //         <Text style={styles.title}>{item.title}</Text>
  //         <Text style={styles.text}>{item.text}</Text>
  //       </View>
  //     </View>
  //   );
  // };

  // const renderNextButton = () => {
  //   return (
  //     <Button style={styles.navButtonNext}>
  //       <Text>Next</Text>
  //     </Button>
  //   );
  // };
  // const renderDoneButton = () => {
  //   return (
  //     <Button style={styles.navButtonDone}>
  //       <Text>Start</Text>
  //     </Button>
  //   );
  // };

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   greeting: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     margin: 16,
//     color: '#000000',
//   },
// });
