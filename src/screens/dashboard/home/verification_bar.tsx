import React from 'react';
import {VStack, HStack, Text, Center, Stack} from 'native-base';
import VerifyEmail from '../../../assets/dashboard/verify/email';
import VerifyPersonal from '../../../assets/dashboard/verify/personal';
import BillPaymentIcon from '../../../assets/dashboard/features/bills_payment';

export default () => {
  return (
  
    <Stack space="7">
      <HStack bg="white.plain" p="4" borderRadius="16" space="2" shadow="3">
      <VerifyEmail />
      <VStack>
        <Text fontWeight="300" fontSize="md">
         Verify your email address
        </Text>
        <Text color="gray.90">Click to get full access</Text>
      </VStack>
    </HStack>

    <HStack bg="white.plain" p="4" borderRadius="16" space="2" borderWidth="1" borderColor="gray.80">
      <VerifyPersonal />
      <VStack ml="4">
        <Text fontWeight="300" fontSize="md">
       Personal Info required
        </Text>
        <Text color="gray.90">Gender, Age, MaritalStatus..</Text>
      </VStack>
    </HStack>
  </Stack>
  );
};
