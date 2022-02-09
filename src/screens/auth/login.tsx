import React from 'react';
import {Text} from 'native-base';
import Button from '../../components/Button';
import InputBar from '../../components/InputBar';
import {AuthStackParams} from '../../route/auth';
import AppContainer from '../../components/AppContainer';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<AuthStackParams, 'SignUp'>;

const LogIn: React.FC<Props> = props => {
  return (
    <AppContainer headerTxt="Log In">
      <Text fontSize="xs" color="gray.100">
        Get started by login
      </Text>
      <InputBar placeholder="number" label="Phone number" />
      <InputBar placeholder="enter password" label="Password" password={true} />
      <Button btnTxt="Submit" btnType="primary" />
      <Text
        mt="3"
        fontSize="xs"
        color="gray.100"
        fontWeight={300}
        textAlign="center"
        onPress={() => props.navigation.navigate('SignUp')}>
        Forgot Password?
      </Text>
    </AppContainer>
  );
};

export default LogIn;
