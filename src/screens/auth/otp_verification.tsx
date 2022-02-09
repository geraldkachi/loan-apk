import {Text} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Button from '../../components/Button';
import colors from '../../config/utils/colors';
import {AuthStackParams} from '../../route/auth';
import AppContainer from '../../components/AppContainer';
import {StackScreenProps} from '@react-navigation/stack';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

type Props = StackScreenProps<AuthStackParams, 'SignUp'>;

const OTPVerification: React.FC<Props> = props => {
  const [otp, setOtp] = useState();
  return (
    <AppContainer headerTxt="OTP Verification">
      <Text fontSize="xs" color="gray.100">
        Enter the OTP you received on 08123456789
      </Text>
      <SmoothPinCodeInput
        password={true}
        mask="﹡"
        codeLength={6}
        cellStyle={styles.oTCode}
        cellStyleFocused={{
          borderColor: colors.primary[102],
        }}
        value={otp}
        onTextChange={text => setOtp(text)}
        // onFulfill={() => this.doSubmit}
      />
      <Button btnTxt="Verify Phone Number" btnType="primary" />
      <Text fontSize="xs" color="gray.100" mt="3" textAlign="center">
        Did not get OTP?{' '}
        <Text
          // fontSize="xs"
          color="accent.blue"
          fontWeight={300}>
          Resend
        </Text>
      </Text>
    </AppContainer>
  );
};
export default OTPVerification

const styles = StyleSheet.create({
  oTCode: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray[90],
  },
});
