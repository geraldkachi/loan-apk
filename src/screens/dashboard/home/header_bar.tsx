import {StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BellIcon from '../../../assets/dashboard/bell';
import React, {useState, useRef, useEffect} from 'react';
import WaveHandIcon from '../../../assets/dashboard/wave_hand';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {View, Text, Icon, Avatar, HStack, Box} from 'native-base';

const HeaderBar = props => {
  const refRBSheet = useRef();
  const [username, setUsername] = useState('');
  const [notificationHasData, setNotificationHasData] = useState(false);
  //const [notificationData, setNotificationData] = useState(null);
  //   const {contextValue, updateContext} = useContext(AppStateContext);

  useEffect(() => {
    usernameData();
    //remoteNotification();
  }, []);

  const usernameData = async () => {
    setUsername('Opeoluwa');
    //var user = await GetDataFromStorage('user');
    //console.log(user);
    // setUsername(user.firstName);
    // setImagePath(user.imagePath);
    // contextValue.user = user;
    // updateContext(contextValue);
  };

  return (
    <SafeAreaView style={styles.salutationContainer}>
      <HStack>
        <Avatar
          bg="primary.101"
          mr="2.5"
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
          }}>
          IM
        </Avatar>

        <Box>
          <HStack space={2}>
            <Text color="gray.100">Hello {username ? username : 'John'},</Text>
            <WaveHandIcon />
          </HStack>

          <Text fontSize="lg" fontWeight={300} fontFamily="heading">
            Welcome back!
          </Text>
        </Box>
      </HStack>

      <TouchableOpacity
        onPress={async () => {
          refRBSheet.current.open();
          setNotificationHasData(false);
        }}>
        {notificationHasData ? <BellIcon /> : <BellIcon />}
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        height={600}
        openDuration={200}
        customStyles={{
          container: {
            justifyContent: 'flex-start',
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <View style={styles.modalNav}>
          <View style={styles.modalNavView1}>
            <Icon
              name="arrow-back"
              onPress={() => refRBSheet.current.close()}
            />
          </View>
          <View style={styles.modalNavView2}>
            <Text style={styles.textHeader}>Notifications </Text>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};
export default HeaderBar;

const styles = StyleSheet.create({
  salutationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
