import React from 'react';
import BankIcon from '../../../assets/dashboard/bank';
import {View, Text, Center} from 'native-base';
import AirtimeDataIcon from '../../../assets/dashboard/features/airtime';
import SendMoneyIcon from '../../../assets/dashboard/features/send_money';
import BillPaymentIcon from '../../../assets/dashboard/features/bills_payment';

export default () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Center bg="white.plain" borderRadius="16" p="2" width="30%">
        <SendMoneyIcon />
        <Text fontSize="12" p="1">
          Send money
        </Text>
      </Center>
      <Center bg="white.plain" borderRadius="16" p="2">
        <BillPaymentIcon />
        <Text fontSize="12" p="1">
          Bills
        </Text>
      </Center>
      <Center bg="white.plain" borderRadius="16" p="2">
        <AirtimeDataIcon />
        <Text fontSize="12" p="1">
          Airtime/Data
        </Text>
      </Center>
    </View>
  );
};
