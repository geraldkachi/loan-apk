import React from 'react';
import {Text} from 'native-base';
import Button from '../../components/Button';
import InputBar from '../../components/InputBar';
import {AuthStackParams} from '../../route/auth';
import AppContainer from '../../components/AppContainer';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<AuthStackParams, 'SignUp'>;

const ForgotPassword: React.FC<Props> = props => {
  return (
    <AppContainer headerTxt="Forgot Password">
      <Text fontSize="xs" color="gray.100">
        A rest code will be sent to your registered email address
      </Text>
      <InputBar placeholder="email" label="email address" />
      <Button btnTxt="Send Code" btnType="primary" />

      <Text fontSize="xs" color="gray.100" mt="3" textAlign="center">
        Remember your password?{' '}
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
export default ForgotPassword
