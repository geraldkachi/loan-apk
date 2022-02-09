import React, {useContext, useEffect} from 'react';
import styles from './style';
import {StatusBar, Image} from 'react-native';
import {H3, Text, Container, View, Button} from 'native-base';
import Swiper from 'react-native-swiper';
import {primaryImage} from '../../../config/images';
import {
  GetDataFromStorage,
  DeleteDataFromStorage,
} from '../../../config/functions';
import {ThemeContext} from '../../../config/util/ThemeManager';
import ButtonModal from '../../../components/ButtonModal';
import Toast from 'react-native-simple-toast';
import {StackActions} from '@react-navigation/native';
import {primaryColors} from '../../../config/colors';
import {ONESIGNAL_APP_ID} from '../../../config/constants';
import OneSignal from 'react-native-onesignal';

export default ({navigation}) => {
  useEffect(() => {
    manageToken();
  }, []);

  const {theme, toggleTheme} = useContext(ThemeContext);

  const manageToken = async () => {

    setTimeout(async () => {
      const now = new Date();
      const sessionTime = JSON.parse(await GetDataFromStorage('expireAt'));
      const user = await GetDataFromStorage('user');

      let timeNow = now.getTime();
      if (timeNow > sessionTime || user === null) {
        await DeleteDataFromStorage('expireAt');
        if (sessionTime) {
          Toast.show('Session expired! Kindly login to continue', Toast.LONG);
        }
      } else {
        navigation.dispatch(StackActions.replace('DashboardTab'));
      }
    }, 200);
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={primaryColors.grayWhite}
      />
      <View style={[styles.container, styles[`container${theme}`]]}>
        <View style={styles.containerTop} />
        <View style={styles.containerBottom}>
          <Image source={primaryImage.welcome} style={styles.image} />

          {/* {this.state.isOneSignalActive ? ( */}
          <Swiper
            style={styles.wrapper}
            autoplay={true}
            autoplayTimeout={6}
            showsPagination={true}
            dot={<View style={styles.dotStyle} />}
            activeDot={<View style={styles.activeDotStyle} />}>
            <View style={styles.slide2}>
              <View style={styles.containerText}>
                <H3 style={styles.header}>Personal Loans In Minutes</H3>
                <Text style={styles.subHeader}>Access up to ₦1,000,000</Text>
              </View>
            </View>
            <View style={styles.slide2}>
              <View style={styles.containerText}>
                <H3 style={styles.header}>Fast Application Process</H3>
                <Text style={styles.subHeader}>Apply - Verify - Approve</Text>
              </View>
            </View>
            <View style={styles.slide2}>
              <View style={styles.containerText}>
                <H3 style={styles.header}>Guaranteed Unsecured Loans</H3>
                <Text style={styles.subHeader}>
                  No Collateral. No Guarantor. No Paper Work
                </Text>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={styles.containerText}>
                <H3 style={styles.header}>Top Security</H3>
                <Text style={styles.subHeader}>
                  Multi-level, International Standard
                </Text>
              </View>
            </View>
          </Swiper>
          {/* ) : (
              <Spinner />
            )} */}
        </View>
        <View style={styles.containerButton}>
          <Button
            transparent
            light
            onPress={() =>
              navigation.navigate('AuthStackScreen', {screen: 'SignupPhone'})
            }>
            <Text style={styles.buttonText}> Sign Up</Text>
          </Button>
          <ButtonModal
            btnTxt="Login"
            isBtnActive={true}
            onPress={() => navigation.navigate('AuthStackScreen')}
          />
          {/* <Button style={styles.button} rounded onPress={() => toggleTheme()}>
            <Text> Toggle </Text>
          </Button> */}
        </View>
      </View>
    </Container>
  );
};
