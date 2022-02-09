import React from 'react';
import {Text, Checkbox} from 'native-base';
import Toast from 'react-native-simple-toast';
import {AuthStackParams} from '../../route/auth';
import InputBar from '../../components/InputBar';
import {StackScreenProps} from '@react-navigation/stack';
import AppContainer from '../../components/AppContainer';
import DynamicButton from '../../components/DynamicButton';

type Props = StackScreenProps<AuthStackParams, 'LogIn' | 'OtpVerify'>;

const SignUp: React.FC<Props> = props => {
  return (
    <AppContainer headerTxt="Create Account" scrollAble={true}>
      <Text fontSize="xs" color="gray.100">
        Get started by creating an account
      </Text>
      <InputBar placeholder="enter first name" label="First name" />
      <InputBar placeholder="enter last name" label="Last name" />
      <InputBar placeholder="enter email address" label="Email address" />
      <InputBar placeholder="enter phone number" label="Phone number" />
      <InputBar placeholder="enter password" label="Password" password={true} />
      <Checkbox value="true" size="sm" mt="3">
        I agree to Arvo’s Terms of Use and Privacy Policy{' '}
      </Checkbox>
      <DynamicButton
        fieldStatus={true}
        loading={false}
        btnType="primary"
        btnTxt="Create Account"
        onPress={() => props.navigation.navigate('OtpVerify')}
      />
      <Text
        mt="3"
        fontSize="xs"
        color="gray.100"
        textAlign="center"
        onPress={() => props.navigation.push('LogIn')}>
        Have a account?{' '}
        <Text
          // fontSize="xs"
          color="accent.blue"
          fontWeight={300}>
          Login
        </Text>
      </Text>
    </AppContainer>
  );
};
export default SignUp;
