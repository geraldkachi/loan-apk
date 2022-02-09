import React from 'react';
import Slider from './slider';
import HeaderBar from './header_bar';
import ActionBar from './action_bar';
import VerificationBar from './verification_bar';
import MoneyIcon from '../../../assets/dashboard/money';
import AppContainer from '../../../components/AppContainer';
import {HStack, View, Text, Center, VStack} from 'native-base';
import AirtimeDataIcon from '../../../assets/dashboard/features/airtime';
import SendMoneyIcon from '../../../assets/dashboard/features/send_money';
import BillPaymentIcon from '../../../assets/dashboard/features/bills_payment';


export default () => {
  return (
    <AppContainer hasHeader={false} scrollAble={true}>
      <HeaderBar />
      <Slider />
      <VerificationBar/>
      <ActionBar />

      <HStack bg="accent.green" p="4" borderRadius="16" space="2">
        <MoneyIcon />
        <VStack>
          <Text fontWeight="300" fontSize="md" color="white.plain">
            Access up to ₦500,000
          </Text>
          <Text color="white.plain">Get credited in your Arvo wallet</Text>
        </VStack>
      </HStack>
    </AppContainer>
  );
};
